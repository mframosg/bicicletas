var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const emails = ["alexis12657@gmail.com"];

passport.use(
  "auth-google",
  new GoogleStrategy({
      clientID: "55859657023-hf9ug2q0630jbklnk2mjukgu09c9u6re.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3300/auth/googlecallback",
      passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});