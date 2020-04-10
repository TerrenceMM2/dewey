const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models/');
const { secretOrKey } = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      db.user
        .findOne({ where: { id: payload.id } })
        .then((user) => (user ? done(null, user) : done(null, false)))
        .catch((err) => done(err, false));
    })
  );
};
