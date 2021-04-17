const { getMetadataArgsStorage } = require("typeorm");

module.exports = {
  type: 'mysql',
  host: 'sql6.freemysqlhosting.net',
  port: 3306,
  username: 'sql6405909',
  password: 'uLX6AZai91',
  database: 'sql6405909',
  synchronize: true,
  entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
  timezone: 'Z',
  bigNumberStrings: false,
  migrations: ["migrations/*.js"],
  migrationsRun: false,
  cli: {
    migrationsDir: "migrations"
  },
  extra: {
    // connectionLimit: 5
  }
}
