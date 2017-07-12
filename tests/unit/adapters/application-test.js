import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupTest } from 'ember-mocha'

describe('Unit | Adapter | application', () => {
  setupTest('adapter:application', {
  })

  it('exists', function() {
    const adapter = this.subject()

    expect(adapter).to.be.ok
  })
})