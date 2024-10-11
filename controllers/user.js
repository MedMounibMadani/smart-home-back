require('dotenv').config(); 

const cron = require('node-cron');
const moment = require('moment');
const axios = require('axios');
const crypto = require('crypto');

const User = require('../models/user');
const Device = require('../models/device');
const Action = require('../models/action');

const clientId = process.env.CLIENT_ID;
const nonce = crypto.randomBytes(4).toString('hex'); // 8-digit alphanumeric random string
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const allDevices = {
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
        const devices = response.data.data.thingList; 
        for (const device of devices) {
          const deviceData = {
            itemType: device.itemType,
            itemData: {
              name: device.itemData.name,
              deviceid: device.itemData.deviceid,
              apikey: device.itemData.apikey,
              extra: {
                model: device.itemData.extra.model,
                ui: device.itemData.extra.ui,
                uiid: device.itemData.extra.uiid,
                description: device.itemData.extra.description,
                manufacturer: device.itemData.extra.manufacturer,
                mac: device.itemData.extra.mac,
                apmac: device.itemData.extra.apmac,
                modelInfo: device.itemData.extra.modelInfo,
                brandId: device.itemData.extra.brandId,
              },
              brandName: device.itemData.brandName,
              brandLogo: device.itemData.brandLogo,
              showBrand: device.itemData.showBrand,
              productModel: device.itemData.productModel,
              devGroups: device.itemData.devGroups,
              tags: device.itemData.tags,
              devConfig: device.itemData.devConfig,
              settings: device.itemData.settings,
              family: device.itemData.family,
              sharedBy: device.itemData.sharedBy,
              shareTo: device.itemData.shareTo,
              devicekey: device.itemData.devicekey,
              online: device.itemData.online,
              params: device.itemData.params,
              gsmInfoData: device.itemData.gsmInfoData,
            },
            index: device.index,
          };

          const updatedDevice = await Device.findOneAndUpdate(
            { 'itemData.deviceid': device.itemData.deviceid },  
            deviceData,  
            { new: true, upsert: true } 
          );
        }
        // res.status(200).json({ devices: response.data.data });
        res.status(200).json({ devices: allDevices });
      } catch (error) {
        console.error('Error fetching devices:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching devices.' });
      }
    },
    toggleSwitch: async (req, res) => {
      let { deviceid, status } = req.body;
      const url = `https://${req.user.region}-apia.coolkit.cc/v2/device/thing/status`;
      const headers = {
        'Content-Type': 'application/json',
        'x-ck-appid': clientId,
        'x-ck-nonce': nonce,
        'Authorization': `Bearer ${req.user.token}`,
      };
    
      try {
        const response = await axios.post(url, {
          params: {
            type: 1,
            id: deviceid,
            params: {
              switch: status
            }
          }
        }, { headers });
        if (response.status !== 200) {
          throw new Error('Failed to update device status');
        }
        res.status(200).json({ message: 'Device status updated successfully' });
      } catch(error) {
        console.error('Error updating device status :', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching devices.' });
      }
    },
    toggleBrightness: async (req, res) => {
      let { deviceid, brightness } = req.body;
      const url = `https://${req.user.region}-apia.coolkit.cc/v2/device/thing/status`;
      const headers = {
        'Content-Type': 'application/json',
        'x-ck-appid': clientId,
        'x-ck-nonce': nonce,
        'Authorization': `Bearer ${req.user.token}`,
      };
    
      try {
        const response = await axios.post(url, {
          params: {
            type: 1,
            id: deviceid,
            params: {
              brightness: brightness
            }
          }
        }, { headers });        
        if (response.status !== 200) {
          throw new Error('Failed to update device brightness');
        }
        res.status(200).json({ message: 'Device status updated successfully' });
      } catch(error) {
        console.error('Error updating device brightness :', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching brightness.' });
      }
    },
    fetchActions: async (req, res) => {
      try {
        if (!req.user || !req.user.id) {
          return res.status(401).json({ message: 'User not authenticated' });
        }
        const myActions = await Action.find({ user: req.user.id });
        res.status(200).json({ actions: myActions });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching actions.', error });
      }
    },
    saveAction: async (req, res) => {
      try {
        if (!req.user || !req.user.id) {
          return res.status(401).json({ message: 'User not authenticated' });
        }
        const { actionName, actionType, actionDate, devices, user } = req.body;
        const newAction = new Action({
          actionName,
          actionType,
          actionDate,
          devices,
          user: req.user.id
        });
        await newAction.save();
        const url = `https://${req.user.region}-apia.coolkit.cc/v2/device/thing/status`;
        const headers = {
          'Content-Type': 'application/json',
          'x-ck-appid': clientId,
          'x-ck-nonce': nonce,
          'Authorization': `Bearer ${req.user.token}`,
        };
        const momentDate = moment(actionDate);
        
        cron.schedule(`${momentDate.seconds()} ${momentDate.minutes()} ${momentDate.hours()} ${momentDate.date()} ${momentDate.month() + 1} *`, async () => {
          try {
            for (const deviceId of devices) {
              let device = await Device.findOne({ 'itemData.deviceid' : deviceId });
              console.log(`Turning ${actionType === 'Ouverture' ? 'on' : 'off'} device: ${device.itemData.name}`);           
              try {
                const response = await axios.post(url, {
                  params: {
                    type: 1,
                    id: device.itemData.deviceid,
                    params: {
                      switch: actionType === 'Ouverture' ? 'on' : 'off'
                    }
                  }
                }, { headers });
                if (response.status !== 200) {
                  throw new Error('Failed to update device status');
                }
              } catch(error) {
                console.error('Error updating device status :', error.response ? error.response.data : error.message);
              }
              await sleep(1000);
            };
            console.log(`Action "${actionName}" executed for devices at ${actionDate}`);
          } catch (error) {
            console.error('Error executing action:', error);
          }
        });
        res.status(200).json({ action: newAction });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while saving the action.', error });
      }
    },
    toggleAction: async (req, res) => {
      try {
        if (!req.user || !req.user.id) {
          return res.status(401).json({ message: 'User not authenticated' });
        }
        const { actionId, status } = req.body;
        const updatedAction = await Action.findOneAndUpdate({ _id: actionId, user: req.user.id }, { enabled: status }, { new: true, upsert: true } );
        if (!updatedAction) {
          return res.status(404).json({ message: 'Action not found or you are not authorized to update this action' });
        }
        res.status(200).json({ message: 'Action updated successfully', updatedAction });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating actions status.', error });
      }
    },
    deleteAction: async (req, res) => {
      try {
        if (!req.user || !req.user.id) {
          return res.status(401).json({ message: 'User not authenticated' });
        }
        const { actionId } = req.body;
        await Action.findOneAndDelete({ _id: actionId });
        res.status(200).json({ message: 'Action deleted successfully' });
      } catch (error) {
        consoloe.error(error);
        res.status(500).json({ message: 'An error occurred while deleting action', error });
      }
    }
}