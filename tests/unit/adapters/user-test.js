import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Adapter | user', () => {
  setupTest('adapter:user', {
    needs: ['service:session']
  })

  it('exists', function() {
    const adapter = this.subject()
    expect(adapter).to.be.ok
  })
})
