import Ember from 'ember'
import ApplicationRouteMixin
  from 'ember-simple-auth/mixins/application-route-mixin'

const {
  inject: { service },
  Route
} = Ember

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this.loadCurrentUser()
  },

  loadCurrentUser() {
    return this.get('currentUser')
      .load()
      .catch(() => {
        const session = this.get('session')
        const isAuthenticated = this.get('session.isAuthenticated')

        if (isAuthenticated) {
          session.invalidate().then(() => this.transitionTo('login'))
        }

        this.transitionTo('login')
      })
  },

  /*
  * SIMPLE AUTH
  */

  baseURL: '/',
  routeAfterAuthentication: 'organization',
  routeIfAlreadyAuthenticated: 'organization',

  sessionAuthenticated(...args) {
    this.loadCurrentUser()

    this._super(...args)
  }
})
