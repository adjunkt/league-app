import Mirage from 'ember-cli-mirage'
import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'
import { PLAYER_ACCOUNT } from 'league/tests/helpers/user-accounts'
import { parseQueryString }
  from 'league/mirage/helpers/route_handler_auth_helpers'

describe('Acceptance | logout route', () => {
  let application

  beforeEach(() => {
    application = startApp()
  })

  afterEach(() => {
    destroyApp(application)
  })

  it('invalidates session when visiting /logout ', async () => {
    const user = server.create('user', PLAYER_ACCOUNT)
    authentication().authenticate(user)

    await visit('/logout')

    expect(authentication().currentSession().get('isAuthenticated')).to.be.false
  })

  it('POSTs to revoke api endpoint', async () => {
    const user = server.create('user', PLAYER_ACCOUNT)
    server.post('/oauth/revoke', (_, { requestBody }) => {
      const requestHash = parseQueryString(requestBody)

      expect(requestHash['token']).to.be.equal(window.btoa(user.email))
      expect(requestHash['token_type_hint']).to.be.equal('access_token')

      return new Mirage.Response(200)
    })

    // Using simple auth authenticate test helpers
    // disabled api requests, so we authenticate here manually
    await visit('/login')
    await fillIn('[data-test-login-input-identification]', user.email)
    await fillIn('[data-test-login-input-password]', 'P@ssw0rd')
    await click('[data-test-login-input-submit]')

    await click('[data-test-logout]')
  })

  it('redirects to /logout', async () => {
    const user = server.create('user', PLAYER_ACCOUNT)
    authentication().authenticate(user)

    await visit('/logout')

    expect(currentURL()).to.be.equal('/login')
  })
})
