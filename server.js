import express from 'express';
import 'dotenv/config';
import { Connection } from './loaders/Connection';
import { Middleware } from './loaders/Middleware';

const app = express();

// Middleware initialization
const middleware = new Middleware(app, express);
middleware.init();

// Routes
import bookRoutes from './routes/bookRoutes';
app.use(bookRoutes);

// Authenticate database and launch server
const connection = new Connection(app, express);
connection.authenticate();
