import Ember from 'ember'

const {
  Route
} = Ember

export default Route.extend({
  model() {
    const organization = this.modelFor('organization')
    return organization.get('sports')
  }
})
