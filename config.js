require("dotenv").config()
module.exports = {
    "CDC_port": process.env.CDC_port || 3000,
    "DB_port" : process.env.DB_port || 3306,
    "DB_host" : process.env.DB_host || 'localhost',
    "DB_user" : process.env.DB_user || 'root',
    "DB_password" : process.env.DB_password || 'well2960',
    "DB_database" : process.env.DB_database || 'cdc' 
}