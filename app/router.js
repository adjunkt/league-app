import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('organization', { path: ':organization_path' }, function() {
    this.route('sport', { path: ':sport_path' }, function() {
      this.route('league', { path: ':league_id' }, function() {
        this.route('season', { path: ':season_id' }, function() {
          this.route('team', { path: ':team_id' })
          this.route('teams', function() { this.route('new') })

          this.route('game', { path: ':game_id' })
          this.route('games', function() { this.route('new') })
        })
      })
    })
  })
})

export default Router
