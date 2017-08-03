import ENV from 'league/config/environment'
import OAuth2PasswordGrant
  from 'ember-simple-auth/authenticators/oauth2-password-grant'

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.apiUrl}/oauth/token`,
  serverTokenRevocationEndpoint: `${ENV.apiUrl}/oauth/revoke`
})
