import Ember from 'ember'
import { describe, it, beforeEach, afterEach, context } from 'mocha'
import { expect } from 'chai'
import startApp from 'league/tests/helpers/start-app'
import destroyApp from 'league/tests/helpers/destroy-app'

const {
  $
} = Ember

describe('Acceptance | organization route', () => {
  let application

  beforeEach(() => {
    application = startApp()

    const organization = server.create('organization', {
      name: 'Sports Center',
      friendlyName: 'sports-center'
    })

    server.create('sport', { name: 'Hockey', organization })
    server.create('sport', { name: 'Soccer', organization })
    server.create('sport', { name: 'Baseball', organization })
  })

  afterEach(() => {
    destroyApp(application)
  })

  context('organization index', () => {
    it.skip('can visit /organization-route', async () => {
      await visit('/sports-center')

      expect(currentURL()).to.equal('/sports-center')
      expect($('body').text()).to.contain('Sports Center')
    })

    it.skip('displays list of associated sports', async () => {
      await visit('/sports-center')

      const subject = $('[data-test=organization-sport-list] li')
      expect(subject.length).to.equal(3)
    })
  })
})
