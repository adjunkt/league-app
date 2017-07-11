import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | organization/sport', () => {
  setupTest('route:organization/sport', {})

  it('exists', function() {
    const route = this.subject()

    expect(route).to.be.ok
  })
})
