import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('organization', { path: ':organization_path', resetNamespace: true }, function() {
    this.route('sport', { path: ':sport_path'}, function() {
      this.route('league', { path: ':league_id'}, function() {
        this.route('teams', function() {
          this.route('new')
        })
        this.route('team')
      })
    })
  })
})

export default Router
