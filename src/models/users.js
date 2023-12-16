const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = "SELECT * FROM USERS"
    return dbpool.execute(SQLQuery)
    
}

module.exports = {
    getAllUsers,
}