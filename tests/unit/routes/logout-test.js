import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | logout', () => {
  setupTest('route:logout', {
    needs: ['service:session']
  })

  it('exists', function() {
    const route = this.subject()
    expect(route).to.be.ok
  })
})
