import Ember from 'ember'

const {
  Route,
  get,
  RSVP
} = Ember

export default Route.extend({
  model() {
    const seasonId = get(
      this.modelFor('organization.sport.league.season'), 'id'
    )
    const season = this.get('store').peekRecord('season', seasonId)

    return RSVP.hash({
      teams: season.get('teams')
    })
  }
})
