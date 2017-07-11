import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupModelTest } from 'ember-mocha'

describe('Unit | Model | team', () => {
  setupModelTest('team', {
    needs: []
  })

  it('exists', function() {
    const model = this.subject()

    expect(model).to.be.ok
  })
})
