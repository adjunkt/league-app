import { describe, it, beforeEach, afterEach, context } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'
import { visit } from 'ember-native-dom-helpers'
import { PLAYER_ACCOUNT } from 'league/tests/helpers/user-accounts'


describe('Acceptance | authenticated route', () => {
  let application

  beforeEach(() => {
    application = startApp()
  })

  afterEach(() => {
    destroyApp(application)
  })

  context('unauthenticated', () => {
    it('redirects to login', async () => {
      await visit('/')

      expect(currentURL()).to.equal('/login')
    })
  })

  context('authenticated', () => {
    it('routes to /',  async () => {
      const user = server.create('user', PLAYER_ACCOUNT)
      authentication().authenticate(user)

      await visit('/')

      expect(currentURL()).to.equal('/')
    })
  })
})
