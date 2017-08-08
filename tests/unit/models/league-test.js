import { expect } from 'chai'
import { describe, it } from 'mocha'
import { setupModelTest } from 'ember-mocha'

describe('Unit | Model | league', () => {
  setupModelTest('league', {
    needs: ['model:user', 'model:season', 'model:sport', 'model:team']
  })

  it('exists', function() {
    const model = this.subject()

    expect(model).to.be.ok
  })
})
