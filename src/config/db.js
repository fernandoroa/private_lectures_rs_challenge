const { Pool } = require("pg")

module.exports = new Pool ({
  user: 'fernando',
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "my_teacher"
})