import Ember from 'ember'

const {
  Controller,
  inject: { service },
  assert
} = Ember

export default Controller.extend({
  session: service(),
  isLoading: false,

  actions: {
    authenticate(identification, password) {
      this.get('session')
        .authenticate(
          'authenticator:oauth2-password-grant',
          identification,
          password
        ).then(
          () => {},
          error => {
            assert('Authentication failed', error)
          }
        ).finally(() => {
          this.set('isLoading', false)
        })
    }
  }
})
