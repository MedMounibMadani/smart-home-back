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

// device
router.post('/devices/toggle', verifyTokenMiddleware, userController.toggleSwitch);
router.post('/devices/brightness', verifyTokenMiddleware, userController.toggleBrightness);

// action
router.post('/action/save', verifyTokenMiddleware, userController.saveAction);
router.post('/action/toggle', verifyTokenMiddleware, userController.toggleAction);
router.post('/action/delete', verifyTokenMiddleware, userController.deleteAction);
router.get('/actions', verifyTokenMiddleware, userController.fetchActions);

module.exports = router;
