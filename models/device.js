const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExtraSchema = new Schema({
  model: { type: String, required: true },
  ui: { type: String, required: true },
  uiid: { type: Number, required: true },
  description: { type: String, required: true },
  manufacturer: { type: String, required: true },
  mac: { type: String, required: true },
  apmac: { type: String, required: true },
  modelInfo: { type: String, required: true },
  brandId: { type: String, required: true }
});

const DevGroupSchema = new Schema({
  type: { type: Number, required: true },
  groupId: { type: String, required: true }
});

const DevConfigSchema = new Schema({
  p2pServerName: { type: String, required: true },
  p2pAccout: { type: String, required: true },
  p2pLicense: { type: String, required: true }
});

const SettingsSchema = new Schema({
  opsNotify: { type: Number, required: true },
  opsHistory: { type: Number, required: true },
  alarmNotify: { type: Number, required: true }
});

const FamilySchema = new Schema({
  familyid: { type: String, required: true },
  index: { type: Number, required: true },
  roomid: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true }
});

const SharedBySchema = new Schema({
  apikey: { type: String, required: true },
  permit: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  comment: { type: String, required: true },
  shareTime: { type: Number, required: true }
});

const ShareToSchema = new Schema({
  permit: { type: Number, required: true },
  apikey: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  comment: { type: String, required: true },
  shareTime: { type: Number, required: true }
});

const ParamsSchema = new Schema({
  switch: { type: String, required: true },
  brightness: { type: Number, required: true }
});

const GsmInfoDataSchema = new Schema({
  simStatus: { type: String, required: true }
});

const ItemDataSchema = new Schema({
  name: { type: String, required: true },
  deviceid: { type: String, required: true },
  apikey: { type: String, required: true },
  extra: { type: ExtraSchema, required: true },
  brandName: { type: String, required: true },
  brandLogo: { type: String, required: true },
  showBrand: { type: Boolean, required: true },
  productModel: { type: String, required: true },
  devGroups: [DevGroupSchema],
  tags: { location: { type: String, required: true } },
  devConfig: { type: DevConfigSchema, required: true },
  settings: { type: SettingsSchema, required: true },
  family: { type: FamilySchema, required: true },
  sharedBy: { type: SharedBySchema },
  shareTo: [ShareToSchema],
  devicekey: { type: String, required: true },
  online: { type: Boolean, required: true },
  params: { type: ParamsSchema, required: true },
  gsmInfoData: { type: GsmInfoDataSchema }
});

const DeviceSchema = new Schema({
  itemType: { type: Number, required: true },
  itemData: { type: ItemDataSchema, required: true },
  index: { type: Number, required: true }
});

module.exports = mongoose.model('Device', DeviceSchema);
