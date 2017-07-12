import Ember from 'ember'

const {
  Route,
  get
} = Ember

export default Route.extend({
  model() {
    const sportId = get(this.modelFor('organization.sport'), 'id')
    const sport = this.get('store').peekRecord('sport', sportId)

    return sport.get('leagues')
  }
})
