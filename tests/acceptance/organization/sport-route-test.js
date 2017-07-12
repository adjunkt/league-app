import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'

describe('Acceptance | organization/sport route', function() {
  let application

  beforeEach(function() {
    application = startApp()

    const organization = server.create('organization', {
      name: 'Sports Center',
      friendlyName: 'sports-center'
    })
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /organization/sport-route', async () => {
    await visit('/sports-center/hockey')

    expect(currentURL()).to.equal('/sports-center/hockey')
  })
})
