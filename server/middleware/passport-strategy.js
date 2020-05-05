const { Strategy, ExtractJwt } = require('passport-jwt');
const { model } = require('mongoose');
const keys = require('../keys');

const User = model('users');

cosnt options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.JWT,
};

module.exports = new Strategy(options, async (payload, done) => {
  try {
    const cadidate = await User.findById(payload.userId).select('id');
    if (candidate) {
      done(null, cadidate);
    } else {
      done(null, false);
    }
  } catch (error) {
    console.error(error);
  }
})