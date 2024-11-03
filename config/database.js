export default {
  development: {
    database: 'pet_feeding_tracker_development',
    dialect: 'postgres',
    host: '/var/run/postgresql',
  },
  test: {
    database: 'pet_feeding_tracker_test',
    dialect: 'postgres',
    host: '/var/run/postgresql',
  },
  production: {
    username: process.env.PRODUCTIOB_DB_USERNAME,
    password: process.env.PRODUCTION_DB_PASSWORD,
    database: process.env.PRODUCTION_DB_NAME,
    host: process.env.PRODUCTION_DB_HOST,
    port: process.env.PRODUCTION_DB_PORT,
    dialect: 'postgres',
  },
}
