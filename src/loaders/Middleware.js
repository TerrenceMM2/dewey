import { morganConfig } from '../config/morganConfig';
import compression from 'compression';
import cors from 'cors';
import passport from 'passport';
const root = require('path').join(__dirname, '..', '..', 'client', 'build');

export class Middleware {
    // constructor brings in app and express
    constructor(app, express) {
        this.app = app;
        this.express = express;
    }

    init() {
        // gzips the node server
        this.app.use(compression());

        // enables cors
        this.app.use(cors());

        // express parsing
        this.app.use(this.express.urlencoded({ extended: true }));
        this.app.use(this.express.json());
        this.app.use(this.express.static(root));

        // morgan logging activation
        this.app.use(morganConfig);

        // passport initialization
        this.app.use(passport.initialize());
        require('../config/passport')(passport);
    }
}
