/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'league',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    apiHost: 'http://localhost:3111',
    frontendUrl: 'http://localhost:1111',
    'ember-cli-mirage': {
      enabled: true
    }
  }

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'connect-src': `'self' ${ENV.apiHost}`,
      'font-src': `'self'`,
      'img-src': `'self' 'data:'`,
      'media-src': `'self'`,
      'style-src': `'self' 'unsafe-inline'`,
      'script-src': `'self'`
    }

    // ENV.APP.LOG_RESOLVER = true
    // ENV.APP.LOG_ACTIVE_GENERATION = true
    // ENV.APP.LOG_TRANSITIONS = true
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    // ENV.APP.LOG_VIEW_LOOKUPS = true
  }

  if (environment === 'test') {
    ENV.apiHost = 'http://localhost:1111'
    ENV['ember-cli-mirage'] = {
      enabled: true
    }

    // Testem prefers this...
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
  }

  if (environment === 'production') {}

  return ENV
}
