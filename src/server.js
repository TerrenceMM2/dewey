import express from 'express';
import 'dotenv/config';
import { Connection } from './loaders/Connection';
import { Middleware } from './loaders/Middleware';
import { Routing } from './loaders/Routing';

const app = express();

// Middleware initialization
const middleware = new Middleware(app, express);
middleware.init();

// Routes
const routing = new Routing(app, express);
routing.init();

// Authenticate database and launch server
const connection = new Connection(app, express);
connection.authenticate();
