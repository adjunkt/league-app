import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  hasMany
} = DS

export default HasManyQueryModel.extend({
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  enabled: true,
  deleted: false,

  organizations: hasMany('organization', { inverse: 'users' }),
  leagues: hasMany('league', { inverse: 'players' }),
  teams: hasMany('team', { inverse: 'players' })
})
