import Ember from 'ember'
import shuffleArray from 'league/utils/shuffle-array'
import { generateDays, generateTeams } from 'league/utils/generators'

const {
  Controller,
  computed
} = Ember

export default Controller.extend({
  teamCount: null,
  dayCount: null,

  teams: computed('teamCount', function() {
    return generateTeams(this.get('teamCount'))
  }),

  days: computed('dayCount', function() {
    return generateDays(this.get('dayCount'))
  }),

  actions: {
    buildSeries() {
      
    }
  }
})
