import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | organization/sport/league', () => {
  setupTest('route:organization/sport/league', {})

  it('exists', function() {
    const route = this.subject()
    expect(route).to.be.ok
  })
})
