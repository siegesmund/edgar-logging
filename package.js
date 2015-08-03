Package.describe({
  name: 'edgar-logging',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provides logging functionality to Edgar',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['peter:edgar', 'percolate:synced-cron'])
  api.addFiles('logging.js');
});

Npm.depends({
  'winston': '1.0.1',
  'winston-loggly': '1.1.0'
});
