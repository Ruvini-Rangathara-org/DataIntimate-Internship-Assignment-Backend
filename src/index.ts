import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import process from 'process';

const app = express();

app.use(cors({
    origin: '*'
}));

// app.use(bodyParser.json());

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '1234',
    database: process.env.MYSQL_DATABASE || 'di_backend',
    dialectOptions: {
        createDatabaseIfNotExist: true
    }
});

// Start the server
const port = process.env.PORT || 8081;
app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
    try {
        await sequelize.authenticate(); // Check database connection
        console.log('Database connection has been established successfully.');
        await sequelize.sync(); // Sync database models
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
