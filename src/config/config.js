const development =  {
  username: process.env.DB_DEV_USERNAME,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_DATABASE,
  host: process.env.DB_DEV_HOST,
  dialect: 'mysql',
  logging: false
}

const staging =  {
  username: process.env.DB_TEST_USERNAME,
  password: process.env.DB_TEST_PASSWORD,
  database: process.env.DB_TEST_DATABASE,
  host: process.env.DB_TEST_HOST,
  dialect: 'mysql',
  logging: false
}

const production =  {
  username: process.env.DB_PROD_USERNAME,
  password: process.env.DB_PROD_PASSWORD,
  database: process.env.DB_PROD_DATABASE,
  host: process.env.DB_PROD_HOST,
  dialect: 'mysql',
  logging: false
}

export { development, staging, production };
