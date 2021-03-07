const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema(
  {
    city: String,
    experience: String,
    technologies: [
        {
            name: String,
            is_main_tech: Boolean
        }
    ],
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Candidate', CandidateSchema);