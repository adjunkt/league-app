import ENV from 'league/config/environment'
import * from 'league/mirage/helpers/route_handler_auth_helpers'
import * from 'league/mirage/helpers/route_handler_query_helpers'


export default function() {
  this.post('oauth/token', getToken)
  this.post('oauth/revoke', revokeToken)

  this.get('organizations', getOrganziations)
  this.get('organizations/:id')

  this.get('sports')
  this.get('sports/:id')

  this.get('leagues')
  this.get('leagues/:id')

  this.get('seasons')
  this.get('seasons/:id')

  this.get('users/me', getMe)
  this.get('users')
  this.get('users/:id')

  this.get('teams')
  this.get('teams/:id')

  this.get('games')
  this.get('games/:id')

  return this.passthrough(`${ENV.apiUrl}/**`)
}
