import DS from 'ember-data'

const {
  Model,
  attr,
  hasMany
} = DS

export default Model.extend({
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  enabled: true,
  deleted: false,

  organizations: hasMany('organization', { inverse: 'users' }),
  leagues: hasMany('league', { inverse: 'players' }),
  teams: hasMany('team', { inverse: 'players' })
})
