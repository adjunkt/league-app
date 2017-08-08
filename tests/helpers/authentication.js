import Ember from 'ember'
import {
  authenticateSession,
  invalidateSession,
  currentSession
} from 'league/tests/helpers/ember-simple-auth'
import {
  encodeTokenResponse
} from 'league/mirage/helpers/route_handler_auth_helpers'

const {
  Test: { registerHelper },
  assert
} = Ember

const authentication = application =>
  ({
    authenticate({ email }) {
      if (!email) {
        assert(
          '`autheicate().session()` requires that you provide an email option'
        )
      }

      authenticateSession(application, encodeTokenResponse(email))
    },

    invalidate() {
      invalidateSession(application)
    },

    currentSession() {
      return currentSession(application).get('session')
    }
  })

export default registerHelper('authentication', authentication)
