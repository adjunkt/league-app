import ENV from 'league/config/environment'
import OAuth2PasswordGrant
  from 'ember-simple-auth/authenticators/oauth2-password-grant'

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.apiHost}/oauth/token`,
  serverTokenRevocationEndpoint: `${ENV.apiHost}/oauth/revoke`
})
