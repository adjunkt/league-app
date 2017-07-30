import Ember from 'ember'
import ENV from 'league-app/config/environment'
import fetch from 'fetch'
import OAuth2PasswordGrant
  from 'ember-simple-auth/authenticators/oauth2-password-grant'

const {
  isEmpty,
  RSVP,
  merge
} = Ember

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: `${ENV.apiHost}/oauth/token`,
  serverTokenRevocationEndpoint: `${ENV.apiHost}/oauth/revoke`,

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

    const clientIdHeader = this.get('_clientIdHeader')
    if (!isEmpty(clientIdHeader)) {
      merge(options.headers, clientIdHeader)
    }
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
