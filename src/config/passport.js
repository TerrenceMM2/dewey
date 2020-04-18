import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import db from '../models/';
import { secretOrKey } from './keys';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (payload, done) => {
            db.user
                .findOne({ where: { id: payload.id } })
                .then(user => (user ? done(null, user) : done(null, false)))
                .catch(err => done(err, false));
        })
    );
};
