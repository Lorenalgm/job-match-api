const { Router } = require('express');
const routes = Router();
const CandidatesController = require('./controllers/CandidatesController');

routes.get('/', (req, res) => {
	return res.json({ status: true }).send();
});

routes.get('/candidates', CandidatesController.index);
routes.post('/candidates', CandidatesController.store);

module.exports = routes;