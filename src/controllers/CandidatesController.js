const Candidate = require('../models/Candidate');
const api = require('../services/api');

module.exports = {
  async index(request, response) {
    const candidates = await api.get(`/code_challenge.json`);

    // if necessary to list the candidates from this api
    // const candidates = await Candidate.find();

    return response.json(candidates);
  },

  async store(request, response) {
    const {
      city,
      experience,
      technologies,
    } = request.body;

    const candidate = await Candidate.create({
        city,
        experience,
        technologies
    });

    return response.json(candidate);
  },

};