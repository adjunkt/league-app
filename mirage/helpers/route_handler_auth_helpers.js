import Mirage from 'ember-cli-mirage'
import Ember from 'ember'

const {
  assign
} = Ember


export const TOKEN_ERROR_RESPONSE = {
  error: 'invalid_grant',
  error_description: 'This is an oauth error fmt.'
}

export const TOKEN_RESPONSE = {
  access_token: 'the-access-token',
  token_type: 'Bearer',
  expires_in: 72000
}

// Not real, just so we can fake a lookup for me
export const encodeTokenResponse = username => (
  return assign({}, TOKEN_RESPONSE, { access_token: window.btoa(username)})
)

export const decodeToken = authorizationHeader =>
  window.atob(authorizationHeader.split(' ').pop())

export const parseQueryString = query => {
  const data = {}

  decodeURIComponent(query)
    .split('&')
    .forEach(pair => {
      const [key, val] = pair.split('=')
      data[key] = val
    }
  )

  return data
}

export const getToken = ({ users }, { requestBody }) => {
  const { username } = parseQueryString(requestBody)
  const user = users.findBy({ email: username })

  if (user) {
    return new Mirage.Response(200, {}, encodeTokenResponse(username))
  }

  return new Mirage.Response(401, {}, TOKEN_ERROR_RESPONSE)
}

export const revokeToken = () => new Mirage.Response(200)

const getMe = ({ users }, { requestHeaders: { Authorization }}) =>
  users.findBy({ email: decodeToken(Authorization) })
