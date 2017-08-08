import Ember from 'ember'

const {
  Controller,
  inject: { service }
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
            console.log('Tough luck sucka')
          }
        ).finally(() => {
          this.set('isLoading', false)
        })
    }
  }
})
