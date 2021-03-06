import Ember from 'ember'

const {
  Route
} = Ember

export default Route.extend({
  model({ league_id }) {
    return this.get('store').find('league', league_id)
  }
})
