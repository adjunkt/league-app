import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'

describe('Acceptance | login route', () => {
  let application

  beforeEach(function() {
    application = startApp()
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /login-route', function() {
    visit('/login-route')

    return andThen(() => {
      expect(currentURL()).to.equal('/login-route')
    })
  })
})
