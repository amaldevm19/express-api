const dotenv = require('dotenv');
dotenv.config();
const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
const connectionString = process.env.CONNECTION_STRING;

module.exports = {testEnvironmentVariable, connectionString}