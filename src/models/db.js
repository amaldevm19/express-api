const { Pool } = require('pg')
const dotenv = require('dotenv');
const { connectionString }  = require("../config")    
dotenv.config();

const db = new Pool({ connectionString });
module.exports = db
