const axios = require('axios');
const request = require('supertest');
const axiosMock = require('axios-mock-adapter');
const app = require('../app');

describe('toggleSwitch', () => {
  let mockAxios;

  beforeEach(() => {
    mockAxios = new axiosMock(axios);
  });

  afterEach(() => {
    mockAxios.reset();
    jest.clearAllMocks();
  });

  it('should toggle the device switch on/off', async () => {
    mockAxios.onPost(/\/v2\/device\/thing\/status/).reply(200, {});

    const response = await request(app)
      .post('/api/devices/toggle')
      .send({ deviceid: '123', status: 'on' })
      .set('Authorization', 'Bearer cbbef0f0d894892a4951cf422cf3664d4e2e1c43');

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Device status updated successfully');
  });

  it('should handle errors when toggling the switch fails', async () => {
    mockAxios.onPost(/\/v2\/device\/thing\/status/).reply(500, { message: 'API Error' });

    const response = await request(app)
      .post('/api/devices/toggle')
      .send({ deviceid: '123', status: 'on' })
      .set('Authorization', 'Bearer cbbef0f0d894892a4951cf422cf3664d4e2e1c43');

    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBe('Error fetching devices.');
  });
});
