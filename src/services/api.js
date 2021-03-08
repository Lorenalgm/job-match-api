const axios = require('axios');

const api = axios.create({
    baseURL: 'https://geekhunter-recruiting.s3.amazonaws.com/'
})

module.exports = api;