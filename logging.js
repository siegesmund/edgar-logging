
//
// THIS GITHUB REPO IS PUBLIC!
//

if(Meteor.isServer) {
  var winston = Npm.require('winston');
  Npm.require('winston-loggly');

  winston.add(winston.transports.Loggly, {
    inputToken: process.env.LOGGLY,
    subdomain: "houndfish",
    tags: ["Edgar"],
    json:true
  });

  Edgar.winston = winston;
  Edgar.log = winston.log;

  var cronLogger = function (opts) {
    winston.log(opts.level, opts.message);
  };

  SyncedCron.config({
    logger: cronLogger
  });
}
