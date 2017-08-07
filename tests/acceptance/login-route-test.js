import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'
import { PLAYER_ACCOUNT } from 'league/tests/helpers/user-accounts'
import { visit, click, find, fillIn } from 'ember-native-dom-helpers'

describe('Acceptance | login route', () => {
  let application

  beforeEach(() => {
    application = startApp()
  })

  afterEach(() => {
    destroyApp(application)
  })

  it('can visit /login', async () => {
    const user= server.create('user', PLAYER_ACCOUNT)
    await visit('/login')

    await fillIn('[data-test-login-input-identification]', user.email)
    await fillIn('[data-test-login-input-password]', 'P@ssw0rd')
    await click('[data-test-login-input-submit]')

    expect(authentication().currentSession()).to.equal('blah')
  })
})
