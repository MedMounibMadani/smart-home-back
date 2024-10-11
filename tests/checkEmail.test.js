const request = require('supertest');
const mongoose = require('mongoose');
const User = require('../models/user');  
const app = require('../app');  

jest.mock('../models/user');  

describe('checkEmail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return exists: true if email is found', async () => {
    // Mock User.findOne to return a user
    User.findOne.mockResolvedValue({ email: 'test@example.com' });

    const response = await request(app)
      .get('/api/checkEmail')
      .query({ email: 'test@example.com' });

    expect(response.statusCode).toBe(200);
    expect(response.body.exists).toBe(true);
  });

  it('should return exists: false if email is not found', async () => {
    // Mock User.findOne to return null
    User.findOne.mockResolvedValue(null);

    const response = await request(app)
      .get('/api/check/email')
      .query({ email: 'nonexistent@example.com' });

    expect(response.statusCode).toBe(200);
    expect(response.body.exists).toBe(false);
  });

  it('should handle errors', async () => {
    User.findOne.mockRejectedValue(new Error('DB Error'));

    const response = await request(app)
      .get('/api/check/email')
      .query({ email: 'error@example.com' });

    expect(response.statusCode).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
  });
});
