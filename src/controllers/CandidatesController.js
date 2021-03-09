const Candidate = require('../models/Candidate');
const api = require('../services/api');

module.exports = {
  async index(request, response) {
    const filters = request.query;

    const candidates = await api.get(`/code_challenge.json`);

    let filteredCandidates = candidates.data.candidates;

    if(filters.city){
      filteredCandidates = filteredCandidates.filter(candidate => candidate.city === filters.city);
    }

    if(filters.experience){
      filteredCandidates = filteredCandidates.filter(candidate => candidate.experience === filters.experience);
    }

    if(filters.techs){
      console.log(filters.techs)
    }

    if(filteredCandidates.length > 5){
        filteredCandidates = filteredCandidates.slice(0,5);
    }
    // if necessary to list the candidates from this api
    // const candidates = await Candidate.find();

    return response.json(filteredCandidates);
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