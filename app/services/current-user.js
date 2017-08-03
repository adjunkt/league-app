import Ember from 'ember'

const {
  inject: { service },
  Service,
  RSVP
} = Ember

export default Service.extend({
  store: service(),
  session: service(),

  user: null,
  isLoaded: false,

  load() {
    const isAuthenticated = this.get('session.isAuthenticated')

    if (isAuthenticated && this.get('isLoaded')) {
      return RSVP.resolve(this.get('user'))
    }

    if (isAuthenticated) {
      return this.get('store')
        .queryRecord('user', { me: true })
        .then(user => {
          this.set('isLoaded', true)
          return this.set('user', user)
        })
    }

    return RSVP.resolve()
  }
})
