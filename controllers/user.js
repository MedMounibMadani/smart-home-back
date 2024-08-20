require('dotenv').config(); 

const devices = {
  "thingList": [
    {
      "itemType": 1,
      "itemData": {
        "name": "Smart Light 1",
        "deviceid": "d101",
        "apikey": "apikey101",
        "extra": {
          "model": "SL100",
          "ui": "light_ui",
          "uiid": 1,
          "description": "Smart Light description",
          "manufacturer": "SmartHome Inc.",
          "mac": "00:11:22:33:44:56",
          "apmac": "66:77:88:99:AA:BC",
          "modelInfo": "SL100-info",
          "brandId": "brand101"
        },
        "brandName": "SmartHome",
        "brandLogo": "http://example.com/brand_logo.png",
        "showBrand": true,
        "productModel": "SL100",
        "devGroups": [
          {
            "type": 1,
            "groupId": "g101"
          }
        ],
        "tags": {
          "location": "Room 1"
        },
        "devConfig": {
          "p2pServerName": "p2pServer101",
          "p2pAccout": "p2pAccount101",
          "p2pLicense": "p2pLicense101"
        },
        "settings": {
          "opsNotify": 1,
          "opsHistory": 1,
          "alarmNotify": 1
        },
        "family": {
          "familyid": "f101",
          "index": 1,
          "roomid": "669a24a2f540f5000876b247"
        },
        "sharedBy": {
          "apikey": "apikey_shared101",
          "permit": 1,
          "phoneNumber": "1010101010",
          "email": "owner101@example.com",
          "nickname": "Owner101",
          "comment": "Shared device",
          "shareTime": 1627855010000
        },
        "shareTo": [
          {
            "permit": 1,
            "apikey": "apikey_shared_to_101",
            "phoneNumber": "1010101011",
            "email": "shared_user101@example.com",
            "nickname": "User101",
            "comment": "Sharing with user101",
            "shareTime": 1627856010000
          }
        ],
        "devicekey": "devicekey101",
        "online": true,
        "params": {
          "switch": "on",
          "brightness": 80
        },
        "gsmInfoData": {
          "simStatus": "active"
        }
      },
      "index": 1
    },
    {
      "itemType": 2,
      "itemData": {
        "name": "Smart Thermostat 1",
        "deviceid": "d102",
        "apikey": "apikey102",
        "extra": {
          "model": "ST200",
          "ui": "thermostat_ui",
          "uiid": 2,
          "description": "Smart Thermostat description",
          "manufacturer": "SmartHome Inc.",
          "mac": "AA:BB:CC:DD:EE:01",
          "apmac": "11:22:33:44:55:67",
          "modelInfo": "ST200-info",
          "brandId": "brand102"
        },
        "brandName": "SmartHome",
        "brandLogo": "http://example.com/brand_logo.png",
        "showBrand": true,
        "productModel": "ST200",
        "devGroups": [
          {
            "type": 1,
            "groupId": "g102"
          }
        ],
        "tags": {
          "location": "Room 2"
        },
        "devConfig": {
          "p2pServerName": "p2pServer102",
          "p2pAccout": "p2pAccount102",
          "p2pLicense": "p2pLicense102"
        },
        "settings": {
          "opsNotify": 1,
          "opsHistory": 1,
          "alarmNotify": 1
        },
        "family": {
          "familyid": "f102",
          "index": 2,
          "roomid": "669a24a2f540f5000876b248"
        },
        "sharedBy": {
          "apikey": "apikey_shared102",
          "permit": 1,
          "phoneNumber": "1010101012",
          "email": "owner102@example.com",
          "nickname": "Owner102",
          "comment": "Shared device",
          "shareTime": 1627855011000
        },
        "shareTo": [
          {
            "permit": 1,
            "apikey": "apikey_shared_to_102",
            "phoneNumber": "1010101013",
            "email": "shared_user102@example.com",
            "nickname": "User102",
            "comment": "Sharing with user102",
            "shareTime": 1627856011000
          }
        ],
        "devicekey": "devicekey102",
        "online": true,
        "params": {
          "temperature": 72,
          "switch": "on"
        },
        "gsmInfoData": {
          "simStatus": "inactive"
        }
      },
      "index": 2
    },
    {
      "itemType": 1,
      "itemData": {
        "name": "Smart Light 2",
        "deviceid": "d103",
        "apikey": "apikey103",
        "extra": {
          "model": "SL100",
          "ui": "light_ui",
          "uiid": 1,
          "description": "Smart Light description",
          "manufacturer": "SmartHome Inc.",
          "mac": "00:11:22:33:44:57",
          "apmac": "66:77:88:99:AA:BD",
          "modelInfo": "SL100-info",
          "brandId": "brand103"
        },
        "brandName": "SmartHome",
        "brandLogo": "http://example.com/brand_logo.png",
        "showBrand": true,
        "productModel": "SL100",
        "devGroups": [
          {
            "type": 1,
            "groupId": "g103"
          }
        ],
        "tags": {
          "location": "Room 3"
        },
        "devConfig": {
          "p2pServerName": "p2pServer103",
          "p2pAccout": "p2pAccount103",
          "p2pLicense": "p2pLicense103"
        },
        "settings": {
          "opsNotify": 1,
          "opsHistory": 1,
          "alarmNotify": 1
        },
        "family": {
          "familyid": "f103",
          "index": 3,
          "roomid": "669a24a2f540f5000876b249"
        },
        "sharedBy": {
          "apikey": "apikey_shared103",
          "permit": 1,
          "phoneNumber": "1010101014",
          "email": "owner103@example.com",
          "nickname": "Owner103",
          "comment": "Shared device",
          "shareTime": 1627855012000
        },
        "shareTo": [
          {
            "permit": 1,
            "apikey": "apikey_shared_to_103",
            "phoneNumber": "1010101015",
            "email": "shared_user103@example.com",
            "nickname": "User103",
            "comment": "Sharing with user103",
            "shareTime": 1627856012000
          }
        ],
        "devicekey": "devicekey103",
        "online": true,
        "params": {
          "switch": "off",
          "brightness": 60
        },
        "gsmInfoData": {
          "simStatus": "active"
        }
      },
      "index": 3
    },
    {
      "itemType": 2,
      "itemData": {
        "name": "Smart Thermostat 2",
        "deviceid": "d104",
        "apikey": "apikey104",
        "extra": {
          "model": "ST200",
          "ui": "thermostat_ui",
          "uiid": 2,
          "description": "Smart Thermostat description",
          "manufacturer": "SmartHome Inc.",
          "mac": "AA:BB:CC:DD:EE:02",
          "apmac": "11:22:33:44:55:68",
          "modelInfo": "ST200-info",
          "brandId": "brand104"
        },
        "brandName": "SmartHome",
        "brandLogo": "http://example.com/brand_logo.png",
        "showBrand": true,
        "productModel": "ST200",
        "devGroups": [
          {
            "type": 1,
            "groupId": "g104"
          }
        ],
        "tags": {
          "location": "Room 4"
        },
        "devConfig": {
          "p2pServerName": "p2pServer104",
          "p2pAccout": "p2pAccount104",
          "p2pLicense": "p2pLicense104"
        },
        "settings": {
          "opsNotify": 1,
          "opsHistory": 1,
          "alarmNotify": 1
        },
        "family": {
          "familyid": "f104",
          "index": 4,
          "roomid": "669a24a2f540f5000876b247"
        },
        "sharedBy": {
          "apikey": "apikey_shared104",
          "permit": 1,
          "phoneNumber": "1010101016",
          "email": "owner104@example.com",
          "nickname": "Owner104",
          "comment": "Shared device",
          "shareTime": 1627855013000
        },
        "shareTo": [
          {
            "permit": 1,
            "apikey": "apikey_shared_to_104",
            "phoneNumber": "1010101017",
            "email": "shared_user104@example.com",
            "nickname": "User104",
            "comment": "Sharing with user104",
            "shareTime": 1627856013000
          }
        ],
        "devicekey": "devicekey104",
        "online": true,
        "params": {
          "temperature": 68,
          "switch": "off"
        },
        "gsmInfoData": {
          "simStatus": "inactive"
        }
      },
      "index": 4
    },
    {
      "itemType": 1,
      "itemData": {
        "name": "Smart Light 3",
        "deviceid": "d105",
        "apikey": "apikey105",
        "extra": {
          "model": "SL100",
          "ui": "light_ui",
          "uiid": 1,
          "description": "Smart Light description",
          "manufacturer": "SmartHome Inc.",
          "mac": "00:11:22:33:44:58",
          "apmac": "66:77:88:99:AA:BE",
          "modelInfo": "SL100-info",
          "brandId": "brand105"
        },
        "brandName": "SmartHome",
        "brandLogo": "http://example.com/brand_logo.png",
        "showBrand": true,
        "productModel": "SL100",
        "devGroups": [
          {
            "type": 1,
            "groupId": "g105"
          }
        ],
        "tags": {
          "location": "Room 5"
        },
        "devConfig": {
          "p2pServerName": "p2pServer105",
          "p2pAccout": "p2pAccount105",
          "p2pLicense": "p2pLicense105"
        },
        "settings": {
          "opsNotify": 1,
          "opsHistory": 1,
          "alarmNotify": 1
        },
        "family": {
          "familyid": "f105",
          "index": 5,
          "roomid": "669a24a2f540f5000876b248"
        },
        "sharedBy": {
          "apikey": "apikey_shared105",
          "permit": 1,
          "phoneNumber": "1010101018",
          "email": "owner105@example.com",
          "nickname": "Owner105",
          "comment": "Shared device",
          "shareTime": 1627855014000
        },
        "shareTo": [
          {
            "permit": 1,
            "apikey": "apikey_shared_to_105",
            "phoneNumber": "1010101019",
            "email": "shared_user105@example.com",
            "nickname": "User105",
            "comment": "Sharing with user105",
            "shareTime": 1627856014000
          }
        ],
        "devicekey": "devicekey105",
        "online": true,
        "params": {
          "switch": "on",
          "brightness": 70
        },
        "gsmInfoData": {
          "simStatus": "active"
        }
      },
      "index": 5
    }
  ]
};




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
    checkEmail: async (req, res) => {
        let { email } = req.query;
        try {
            const user = await User.findOne({ email });
        
            if (user) {
              return res.status(200).json({ exists: true });
            } else {
              return res.status(200).json({ exists: false });
            }
        } catch (err) {
            console.error('Error checking email:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    fetchHomesAndRooms: async (req, res) => {
      const url = `https://${req.user.region}-apia.coolkit.cc/v2/family`;
  
      const headers = {
        'Content-Type': 'application/json',
        'x-ck-appid': clientId,
        'x-ck-nonce': nonce,
        'Authorization': `Bearer ${req.user.token}`,
      };
    
      try {
        const response = await axios.get(url, { headers });
        res.status(200).json({ homes: response.data.data });
      } catch (error) {
        console.error('Error fetching devices:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching devices.' });
      }
    },
    fetchDevices: async (req, res) => {
      const url = `https://${req.user.region}-apia.coolkit.cc/v2/device/thing`;
      
      const headers = {
        'Content-Type': 'application/json',
        'x-ck-appid': clientId,
        'x-ck-nonce': nonce,
        'Authorization': `Bearer ${req.user.token}`,
      };
    
      try {
        const response = await axios.get(url, { headers });
        // res.status(200).json({ devices: response.data.data });
        res.status(200).json({ devices: devices });
      } catch (error) {
        console.error('Error fetching devices:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching devices.' });
      }
    }
}