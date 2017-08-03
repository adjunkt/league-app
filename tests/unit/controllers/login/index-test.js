import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Controller | login/index', () => {
  setupTest('controller:login/index', {
    needs: ['service:session']
  })

  it('exists', function() {
    const controller = this.subject()
    expect(controller).to.be.ok
  })
})
