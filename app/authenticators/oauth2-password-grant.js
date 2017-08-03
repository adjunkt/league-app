import Ember from 'ember'
import ENV from 'league/config/environment'
import fetch from 'fetch'
import OAuth2PasswordGrant
  from 'ember-simple-auth/authenticators/oauth2-password-grant'

const {
  RSVP
} = Ember

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.apiUrl}/oauth/token`,
  serverTokenRevocationEndpoint: `${ENV.apiUrl}/oauth/revoke`,
})
