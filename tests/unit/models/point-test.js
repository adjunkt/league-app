import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupModelTest } from 'ember-mocha'

describe('Unit | Model | point', () => {
  setupModelTest('point', {
    needs: []
  })

  it('exists', function() {
    const model = this.subject()

    expect(model).to.be.ok
  })
})
