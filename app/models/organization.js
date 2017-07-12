import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  hasMany
} = DS

export default HasManyQueryModel.extend({
  name: attr('string'),
  friendlyName: attr('string'),
  enabled: true,
  deleted: false,

  sports: hasMany('sport', { inverse: 'organization' }),
  users: hasMany('user', { inverse: 'organizations' })
})
