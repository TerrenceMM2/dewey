import db from '../models';
import CFonts from 'cfonts';
import path from 'path';
import chalk from 'chalk';
import { PORT } from '../constants';

export class Connection {
    // brings in app and express
    constructor(app, express) {
        this.app = app;
        this.express = express;
    }

    // authenticates the sequelize connection
    async authenticate() {
        try {
            await db.sequelize.authenticate();
            console.log('Connection to the database was successful.');

            // if connection is successful to db, launch the app
            this.launch();
        } catch (err) {
            console.error('Cannot establish a database connection:\n', err);
        }
    }

    async launch() {
        try {
            // syncs the db
            await db.sequelize.sync();
            this.app.use(this.express.static(path.join(__dirname, '../../client', 'build')));

            // launches the app
            this.app.listen(PORT, () => {
                CFonts.say(`Dewey`, {
                    font: 'simple',
                    colors: ['greenBright'],
                    independentGradient: true
                });
                console.log(`Server running on port ${chalk.green.bold(PORT)}!`);
            });
        } catch (err) {
            console.error(err);
        }
    }
}
