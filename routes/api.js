const express = require('express');
const authController = require('../controllers/auth');
const userController = require('../controllers/user');
const verifyTokenMiddleware = require('../middlewares/verifyToken');
const router = express.Router();

router.get('/doc', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// auth
router.get('/oauth/link', authController.getAuthLink);
router.post('/oauth/token', authController.getAuthToken);

// user
router.get('/check/email', userController.checkEmail);

// ewelink api calls
router.get('/homes', verifyTokenMiddleware, userController.fetchHomesAndRooms);
router.get('/devices', verifyTokenMiddleware, userController.fetchDevices);

module.exports = router;
