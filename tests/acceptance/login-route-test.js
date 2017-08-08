import { describe, it, beforeEach, afterEach, context } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'
import { PLAYER_ACCOUNT } from 'league/tests/helpers/user-accounts'
import { visit, click, fillIn } from 'ember-native-dom-helpers'

describe('Acceptance | login route', () => {
  let application

  beforeEach(() => {
    application = startApp()
  })

  afterEach(() => {
    destroyApp(application)
  })

  context('with successful api response', () => {
    it('user is authenticate', async () => {
      const user = server.create('user', PLAYER_ACCOUNT)
      await visit('/login')

      await fillIn('[data-test-login-input-identification]', user.email)
      await fillIn('[data-test-login-input-password]', 'P@ssw0rd')
      await click('[data-test-login-input-submit]')

      expect(
        authentication().currentSession().get('isAuthenticated')
      ).to.be.true
      expect(currentURL()).to.equal('/')
    })
  })

  context('with unsuccessful api response', () => {
    it('user not found', async () => {
      await visit('/login')

      await fillIn('[data-test-login-input-identification]', 'nope@email.com')
      await fillIn('[data-test-login-input-password]', 'P@ssw0rd')
      await click('[data-test-login-input-submit]')

      expect(
        authentication().currentSession().get('isAuthenticated')
      ).to.be.false
      expect(currentURL()).to.equal('/login')
    })
  })
})
