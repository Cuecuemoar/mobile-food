const request = require('supertest');
const app = require('../app');

describe('GET /search', () => {
    test('Should return 400 if term query parameter is missing', async () => {
        const response = await request(app).get('/search');
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
        expect(response.body.errors[0].msg).toBe('Search term must be provided.');
    });

    test('Should return 400 if term query parameter is empty', async () => {
        const response = await request(app).get('/search?term=');
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
        expect(response.body.errors[0].msg).toBe('Search term must be at least 1 character long.');
    });

    test('Should return 200 and the correct results for a valid search term', async () => {
        const response = await request(app).get('/search?term=chicken');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(58); // 58 records match 'chicken'
    });

    test('Should return 404 and no results if no match is found', async () => {
        const response = await request(app).get('/search?term=qwerty');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBe(0);
    });
});
