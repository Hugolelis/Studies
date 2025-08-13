import { DataTypes } from 'sequelize'
import { sequelize as db } from '../db/conn.js'
import { User} from './User.js'

export const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true
    },

    number: {
        type: DataTypes.STRING,
        required: true
    },

    city: {
        type: DataTypes.STRING,
        required: true
    }
})

User.hasMany(Address)
Address.belongsTo(User)