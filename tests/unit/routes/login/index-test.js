import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Route | login/index', () => {
  setupTest('route:login/index', {
    needs: ['service:session']
  })

  it('exists', function() {
    const route = this.subject()
    expect(route).to.be.ok
  })
})
