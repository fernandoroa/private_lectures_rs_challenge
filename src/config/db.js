const { Pool } = require("pg")

module.exports = new Pool ({
  user: 'fernando',
  password: "123456",
  host: "db", // use localhost if not in docker compose !!
  port: 5433,
  database: "my_teacher"
})