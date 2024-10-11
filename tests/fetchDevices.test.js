const axios = require('axios');
const request = require('supertest');
const Device = require('../models/device'); 
const app = require('../app');
const axiosMock = require('axios-mock-adapter');

jest.mock('../models/device');

describe('fetchDevices', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new axiosMock(axios);
  });

  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  it('should return devices fetched from API and save them to the database', async () => {
    const mockResponse = {
      data: {
        data: {
          thingList: [
            {
              itemType: 'device',
              itemData: {
                name: 'Device1',
                deviceid: '123',
                apikey: 'apikey',
                extra: { model: 'model1' },
                brandName: 'Brand1',
                online: true,
              },
              index: 0,
            },
          ],
        },
      },
    };

    mockAxios.onGet(/\/v2\/device\/thing/).reply(200, mockResponse);

    const response = await request(app)
      .get('/api/devices')
      .set('Authorization', 'Bearer cbbef0f0d894892a4951cf422cf3664d4e2e1c43'); 
    
    expect(response.statusCode).toBe(200);
    expect(response.body.devices).toBeDefined();

    expect(Device.findOneAndUpdate).toHaveBeenCalledWith(
      { 'itemData.deviceid': '123' },
      expect.any(Object),
      { new: true, upsert: true }
    );
  });

  it('should handle errors if API request fails', async () => {
    mockAxios.onGet(/\/v2\/device\/thing/).reply(500, { message: 'API Error' });

    const response = await request(app)
      .get('/api/devices')
      .set('Authorization', 'Bearer cbbef0f0d894892a4951cf422cf3664d4e2e1c43'); 

    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBe('Error fetching devices.');
  });
});
