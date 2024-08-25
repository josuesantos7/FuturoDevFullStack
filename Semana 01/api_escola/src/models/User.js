const { password } = require("../config/database.config")
const { connection }  = require("../database/connection")

const { Datatypes } = require ("sequelize")

const User = connection.define("user", {
    name: {
        type: Datatypes.STRING
    },
    email: {
        type: Datatypes.STRING,
        unique: true
    },
    password: {
        type: Datatypes.STRING,
    },
    createdAt: Datatypes.Date,
    updatedAt: Datatypes.Date
})

module.exports = User