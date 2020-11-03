// const knex = require("knex");

// const knexfile = require("../knexfile.js");

// // change to "production" and update knexfile.js to use postgres.
// const database = "development";

// module.exports = knex(knexfile[database]);

const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);
