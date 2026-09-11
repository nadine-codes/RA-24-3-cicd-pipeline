const request = require('supertest');
const app = require('./http-server');

describe('GET /', () => {
  it('should display "Hello World" on the main page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
