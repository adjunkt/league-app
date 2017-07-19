import Ember from 'ember'

const {
  Route
} = Ember

export default Route.extend({
  model({ season_id }) {
    return this.get('store').findRecord('season', season_id)
  }
})
