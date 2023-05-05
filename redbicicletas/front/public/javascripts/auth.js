var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const emails = ["alexis12657@gmail.com"];

passport.use(
  "auth-google",
  new GoogleStrategy({
      clientID: "938146231534-1hpqrnfje8c10m3uj5d1i7mj6f79gsi9.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3100/auth/google/callback",
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