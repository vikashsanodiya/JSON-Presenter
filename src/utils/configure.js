// src/utils/configure.js
const { set } = require('lodash');

const config = {};
set(config, 'database.host', 'localhost');
set(config, 'database.port', 5432);

module.exports = config;
