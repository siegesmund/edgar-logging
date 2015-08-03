Package.describe({
  name: 'peter:edgar-logging',
  version: '0.0.1',
  summary: 'Provides logging functionality to Edgar',
  git: 'https://github.com/siegesmund/edgar-logging.git',
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
