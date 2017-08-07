import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'
import { PLAYER_ACCOUNT } from 'league/test/helpers/user-accounts'

describe('Acceptance | login route', () => {
  let application

  beforeEach(() => {
    application = startApp()
  })

  afterEach(() => {
    destroyApp(application)
  })

  it('can visit /login', () => {
    const user= server.create('user', PLAYER_ACCOUNT)
    visit('/login')

    return andThen(() => {
      expect(currentURL()).to.equal('/login')
    })
  })
})
