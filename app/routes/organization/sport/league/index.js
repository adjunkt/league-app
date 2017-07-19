import Ember from 'ember'

const {
  get,
  Route,
  RSVP
} = Ember

export default Route.extend({
  model() {
    const leagueId = get(this.modelFor('organization.sport.league'), 'id')
    const league = this.get('store').peekRecord('league', leagueId)

    return league.get('seasons')
  }
})
