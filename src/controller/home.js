const testEnvironmentVariable  = require("../config")    

module.exports = {
     homePage : (req, res) => res.status(200).json({ message: testEnvironmentVariable })
}