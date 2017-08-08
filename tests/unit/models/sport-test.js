import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupModelTest } from 'ember-mocha'

describe('Unit | Model | sport', () => {
  setupModelTest('sport', {
    needs: ['model:organization', 'model:league']
  })

  it('exists', function() {
    const model = this.subject()

    expect(model).to.be.ok
  })
})
