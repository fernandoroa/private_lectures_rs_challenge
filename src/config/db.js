const pgp = require('pg-promise')();

const databaseConfig = {
  user: 'fernando',
  password: '123456',
  host: 'db',
  port: 5433,
  database: 'my_teacher'
}

const db = pgp(databaseConfig);

module.exports = { db };