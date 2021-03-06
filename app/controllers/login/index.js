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
          () => this.transitionToRoute('authenticated'), // STUB
          error => assert('Authentication error', error) // STUB
        ).finally(() => {
          this.set('isLoading', false)
        })
    }
  }
})
