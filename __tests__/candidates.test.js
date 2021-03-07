const request = require('supertest');
const app = require('../src/app');

describe('Testing the candidates API', () => {
    it('tests the base route and returns true for status', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });

    it('tests the get candidates endpoint and have sucess status', async () => {
		const response = await request(app).get('/candidates');
		expect(response.status).toBe(200);
    });

    it('tests the post new candidate endpoint and returns 200 for status', async () => {
		const response = await supertest(app).post('/candidates').send({
			city: 'Macapá',
			experience: '2+ years',
			technologies: [
                {
                    name: 'Javascript',
                    is_main_tech: true
                },
                {
                    name: 'React',
                    is_main_tech: false
                }
            ]
        });
		expect(response.status).toBe(200);
    });
});