import DS from 'ember-data'

const {
  Model,
  attr
} = DS

export default Model.extend({
  email: attr('email'),
  firstName: attr('string'),
  lastName: attr('string')
  enabled: true,
  deleted: false,

  organizations: hasMany('organization', { inverse: 'users' }),
  leagues: hasMany('league', { inverse: 'users' }),
  teams: hasMany('team', { inverse: 'users' })
})
