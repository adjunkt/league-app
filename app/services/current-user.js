import Ember from 'ember'

const {
  inject: { service },
  Service,
  RSVP,
  isPresent
} = Ember

export default Service.extend({
  store: service(),
  session: service(),

  user: null,

  load() {
    const isAuthenticated = this.get('session.isAuthenticated')
    const user = this.get('user')

    if (isAuthenticated && isPresent(user)) {
      return RSVP.resolve(user)
    }

    if (isAuthenticated) {
      return this.get('store')
        .queryRecord('user', { me: true })
        .then(
          currentUser => this.set('user', currentUser),
          error => error
        )
    }

    return RSVP.reject()
  }
})
