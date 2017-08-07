import ENV from 'league/config/environment'
import * as AuthHelpers from 'league/mirage/helpers/route_handler_auth_helpers'
import * as QueryHelpers
  from 'league/mirage/helpers/route_handler_query_helpers'


export default function() {
  this.urlPrefix = ENV.apiHost

  this.get('/organizations', QueryHelpers.getOrganziations)
  this.get('/organizations/:id')

  this.get('/sports')
  this.get('/sports/:id')

  this.get('/leagues')
  this.get('/leagues/:id')

  this.get('/seasons')
  this.get('/seasons/:id')

  this.get('/teams')
  this.get('/teams/:id')

  this.get('/games')
  this.get('/games/:id')

  return this.passthrough(`${ENV.apiHost}/**`)
}

export function testConfig() {
  this.post('/oauth/token', AuthHelpers.getToken)
  this.post('/oauth/revoke', AuthHelpers.revokeToken)

  this.get('/users/me', AuthHelpers.getMe)
  this.get('/users')
  this.get('/users/:id')
}
