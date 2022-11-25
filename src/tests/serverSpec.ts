import app from '../server';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('tests /images/resizing api', async () => {
        const response = await request.get('/images/resizing');
        expect(response.status).toBe(200);
    });
});
