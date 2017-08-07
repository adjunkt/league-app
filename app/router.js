import Ember from 'ember'
import config from './config/environment'
import adminRouter from 'ember-admin/router'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  adminRouter(this)

  this.route('organization', { path: ':organization_path' }, function() {
    this.route('sport', { path: ':sport_path' }, function() {
      this.route('league', { path: ':league_id' }, function() {
        this.route('season', { path: ':season_id' }, function() {
          this.route('teams', function() {
            this.route('show', { path: ':team_id' })
          })
          this.route('games', function() {
            this.route('show', { path: ':game_id' })
          })
        })
      })
    })
  })
  this.route('login', () => {})
  this.route('logout')
  this.route('authenticated');
})

export default Router
