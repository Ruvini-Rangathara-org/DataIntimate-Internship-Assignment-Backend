import { DataTypes } from 'sequelize';
import sequelize from "../middleware/sequelize";

// Define User model for MySQL
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    fName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;