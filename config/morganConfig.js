import morgan from 'morgan';
import chalk from 'chalk';

export const morganConfig = morgan((tokens, req, res) => {
    return [
        chalk.green.bold(tokens.method(req, res)),
        chalk.red.bold(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        chalk.yellow(tokens['response-time'](req, res) + ' ms')
    ].join(' ');
});
