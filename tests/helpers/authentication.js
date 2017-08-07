import Ember from 'ember'
import {
  authenticateSession,
  invalidateSession,
  currentSession
} from 'league/tests/helpers/ember-simple-auth'
import {
  encodeTokenResponse
} from 'league/mirage/helpers/route_handler_auth_helpers'
import { PLAYER_ACCOUNT } from 'league/tests/helpers/user-accounts'

const {
  Test: { registerHelper },
  assign,
  assert
} = Ember

const authentication = (application, options) =>
  ({
    authenticate(email) {
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
      return currentSession(application)
    }
  })

export default registerHelper('authentication', authentication)
