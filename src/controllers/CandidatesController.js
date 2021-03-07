const Candidate = require('../models/Candidate');

module.exports = {
  async index(request, response) {

    const candidates = await Candidate.find();

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