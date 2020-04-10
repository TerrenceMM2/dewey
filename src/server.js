import express from 'express';
import passport from 'passport';
import 'dotenv/config';
import { Connection } from './loaders/Connection';
import { Middleware } from './loaders/Middleware';

const app = express();

// Middleware initialization
const middleware = new Middleware(app, express);
middleware.init();

// Passport initialization
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.get('/test', (req, res) =>
  res.json({
    msg: 'Hello from AWS! This application was last updated on Wednesday, April 8th, 2020',
  })
);

import bookRoutes from './routes/bookRoutes';
import userRoutes from './routes/userRoutes';
app.use(bookRoutes);
app.use(userRoutes);

// Authenticate database and launch server
const connection = new Connection(app, express);
connection.authenticate();
