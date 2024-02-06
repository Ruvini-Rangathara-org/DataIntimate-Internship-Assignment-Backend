import { DataTypes } from 'sequelize';
import sequelize from "../middleware/sequelize";
import User from "./user-model";

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
    username: {
        type: DataTypes.STRING, // Foreign key to match User's primaryKey
        allowNull: false,
        references: {
            model: 'Users',
            key: 'username',
        },
    },
});

// Define the relationship between User and Item
User.hasMany(Item, { foreignKey: 'username' }); // Define the association from User to Item
Item.belongsTo(User, { foreignKey: 'username' }); // Define the association from Item to User

export default Item;