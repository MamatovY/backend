const sequelize = require('./db.js')

const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.STRING, unique: true },
    right: { type: DataTypes.INTEGER, defaultValue: 0 },
    wrong: { type: DataTypes.INTEGER, defaultValue: 0 }
}

)