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

    const sport = organization
      .createSport({ name: 'Hockey', friendlyName: 'hockey' })

    sport.createLeague({ name: 'Gold' })
    sport.createLeague({ name: 'Silver' })
    sport.createLeague({ name: 'Bronze' })
  })

  afterEach(function() {
    destroyApp(application)
  })

  context('sports index', () => {
    it('can visit /organization/sport-route', async () => {
      await visit('/sports-center/hockey')

      expect(currentURL()).to.equal('/sports-center/hockey')
      expect($('body').text()).to.contain('Hockey')
    })

    it('displays list of associated league', async () => {
      await visit('/sports-center/hockey')

      const subject = $('[data-test=sport-league-list] li')
      expect(subject.length).to.equal(3)
    })
  })
})
