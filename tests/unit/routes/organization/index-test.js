import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | index', () => {
  setupTest('route:organization/index', {
  })

  it('exists', function() {
    const route = this.subject()
    expect(route).to.be.ok
  })
})
