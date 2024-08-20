require('dotenv').config(); 

const axios = require('axios');
const crypto = require('crypto');
const querystring = require('querystring');

const User = require('../models/user');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUrl = process.env.REDIRECT_URL;
const seq = Date.now().toString(); // Timestamp in milliseconds
const nonce = crypto.randomBytes(4).toString('hex'); // 8-digit alphanumeric random string
const authBaseUrl = process.env.AUTH_BASE_URL;

const generateSignature = (data, secret) => {
    return crypto.createHmac('sha256', secret)
                 .update(data)
                 .digest('base64');
};

module.exports = {
    getAuthLink: async (req, res) => {
        const { email, fullname } = req.query;
        const state = email; 
        let user = new User({ ...req.query });
        await user.save();
        // Generate HMAC SHA256 signature
        const buffer = Buffer.from(`${clientId}_${seq}`, 'utf-8');
        const sign = crypto.createHmac('sha256', clientSecret).update(buffer).digest('base64');

        // Create authorization URL
        const params = {
            clientId,
            seq,
            authorization: sign,
            redirectUrl,
            grantType: 'authorization_code',
            state,
            nonce,
        };

        const authUrl = authBaseUrl + `?${querystring.stringify(params)}`;
        res.json({ authUrl: authUrl });
    },
        
    getAuthToken: async (req, res) => {
            const { code, region, state } = req.body;
            const url = `https://${region}-apia.coolkit.cc/v2/user/oauth/token`;
            const data = {
                code,
                redirectUrl,
                grantType: 'authorization_code',
            };
             // Stringify the JSON data for signature calculation
            const bodyString = JSON.stringify(data);

            // Generate HMAC-SHA256 signature for the body content
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
                const { accessToken, atExpiredTime, refreshToken, rtExpiredTime } = response.data.data;
               
                // Store tokens securely
                const user = await User.findOne({ email: state });

                if (!user) {
                    throw new Error('User not found.');
                }
                user.region = region; 
                user.token = accessToken; 
                user.tokenExpiry = new Date(atExpiredTime); 
                user.refreshToken = refreshToken; 
                user.refreshTokenExpiry = new Date(rtExpiredTime);
                await user.save();
                res.json({ user });
            } catch (error) {
                if (error.response) {
                    console.error('Error exchanging authorization code for token:', error.response.data);
                    res.status(error.response.status).json({ error: error.response.data });
                } else if (error.request) {
                    console.error('No response received:', error.request);
                    res.status(500).json({ error: 'No response received from the token endpoint' });
                } else {
                    console.error('Error setting up the request:', error.message);
                    res.status(500).json({ error: 'Error setting up the request' });
                }
            }
        }, 
}