import Ember from 'ember'

const {
  get,
  Route,
  RSVP
} = Ember

export default Route.extend({
  model() {
    const store = this.get('store')
    const leagueId = get(this.modelFor('sport.league'), 'id')
    const league = this.get('store').peekRecord('league', leagueId)

    return RSVP.hash({
      teams: league.get('teams'),
      players: league.get('players')
    })
  }
})
