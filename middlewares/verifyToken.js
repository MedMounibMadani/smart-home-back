const axios = require('axios');
const crypto = require('crypto');
const User = require('../models/user');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const nonce = crypto.randomBytes(4).toString('hex'); // 8-digit alphanumeric random string

const isTokenExpired = (tokenExpiry) => {
    return new Date() >= new Date(tokenExpiry);
};

const generateSignature = (data, secret) => {
    return crypto.createHmac('sha256', secret)
                 .update(data)
                 .digest('base64');
};

const refreshToken = async (refreshToken, region) => {
    const url = `https://${region}-apia.coolkit.cc/v2/user/refresh`;
    const data = {
        rt: refreshToken,
    };
    const bodyString = JSON.stringify(data);
    const signature = generateSignature(bodyString, clientSecret);

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-ck-appid': clientId,
                'x-ck-nonce': nonce,
                'Authorization': `Sign ${signature}`,
            }
        });

        const { at, rt } = response.data.data;

        const newAccessTokenExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days
        const newRefreshTokenExpiry = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000); // 60 days

        return { accessToken: at, refreshToken: rt, newAccessTokenExpiry, newRefreshTokenExpiry };
    } catch (error) {
        console.error('Error refreshing access token:', error.response?.data || error.message);
        throw new Error('Failed to refresh access token');
    }
};

const verifyTokenMiddleware = async (req, res, next) => {
    if (req.headers.authorization) {
        const accessToken = req.headers.authorization.split(' ')[1]; 
        const user = await User.findOne({ token: accessToken });
        if (user) {
            if (isTokenExpired(user.tokenExpiry)) {
                try {
                    const { accessToken: newAccessToken, refreshToken: newRefreshToken, newAccessTokenExpiry, newRefreshTokenExpiry } = await refreshToken(user.refreshToken, user.region);
                    user.token = newAccessToken;
                    user.refreshToken = newRefreshToken;
                    user.tokenExpiry = newAccessTokenExpiry;
                    user.refreshTokenExpiry = newRefreshTokenExpiry;
                    await user.save();
                    console.log('Token updated !');
                    return res.status(201).json({ message: 'Token updated', token: newAccessToken });
                } catch (error) {
                    return res.status(402).json({ message: 'Error refresin token' });
                }
            } else {
                req.user = user;
            }
        } else {
            return res.status(403).json({ message: 'user token not found.' });
        }
    } else {
        return res.status(401).json({ message: 'Authorization header missing' });
    }
    next(); // Pass control to the next middleware or route handler
};

module.exports = verifyTokenMiddleware;
