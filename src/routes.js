const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res) => {
	return res.json({ status: true }).send();
});

module.exports = routes;