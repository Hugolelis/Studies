import { DataTypes } from 'sequelize'
import { sequelize as db } from '../db/conn.js'

export const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    occupation: {
        type: DataTypes.STRING,
        required: true,
    },

    newsSletter: {
        type: DataTypes.BOOLEAN,
    },
})
