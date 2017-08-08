import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Service | current user', () => {
  setupTest('service:current-user', {
    needs: ['service:session']
  })

  it('exists', function() {
    const service = this.subject()
    expect(service).to.be.ok
  })
})
