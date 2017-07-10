import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'

describe('Acceptance | organization route', function() {
  let application

  beforeEach(function() {
    application = startApp()

    server.create('organization', {
      name: 'Sports Center',
      friendlyUrl: 'sports-center'
    })
  })

  afterEach(function() {
    destroyApp(application)
  })

  it('can visit /organization-route', async () => {
    await visit('/sports-center')

    expect(currentURL()).to.equal('/sports-center')
    expect($('body').text()).to.contain('Sports Center')
  })
})
