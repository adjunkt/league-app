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

  makeRequest(url, data, headers = {}) {
    const body = Object.keys(data).map(key =>
      `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    ).join('&')

    const options = {
      body,
      headers,
      method: 'POST',
      credentials: 'include'
    }

    options.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return new RSVP.Promise((resolve, reject) => {
      fetch(url, options).then(response => {
        response.text().then(text => {
          const json = text ? JSON.parse(text) : {}
          if (response.ok) {
            resolve(json)
          } else {
            response.responseJSON = json
            reject(response)
          }
        })
      }).catch(reject)
    })
  }
})
