import { DataTypes } from 'sequelize';
import sequelize from './';

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

// Define Item model for MySQL
const Item = sequelize.define('Item', {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit_price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.STRING, // Foreign key to match User's primaryKey
        allowNull: false,
        references: {
            model: 'User',
            key: 'username',
        },
    },
});

// Define the relationship between User and Item
User.hasMany(Item, { foreignKey: 'userId' });
Item.belongsTo(User, { foreignKey: 'userId' });

export { User, Item };
