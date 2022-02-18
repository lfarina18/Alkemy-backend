const express = require('express');
const cors = require('cors');
const userRoutes = require('../routes/users');
const budgetFormRoutes = require('../routes/budgetForm');
const db = require('../db/connection');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.host = process.env.HOST || '0.0.0.0';

    this.paths = {
      users: '/api/users',
      budgetForm: '/api/budgetform'
    }


    // Initial methods
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  // DB Connection
  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Reading and parsing body
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.paths.users, userRoutes);
    this.app.use(this.paths.budgetForm, budgetFormRoutes);
  }

  listen() {
    this.app.listen(this.port, this.host, () => {
      console.log('Server listening on port', this.port);
    });
  }
}

module.exports = Server;
