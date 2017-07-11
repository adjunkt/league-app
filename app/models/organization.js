import DS from 'ember-data'

const {
  Model,
  attr,
  hasMany
} = DS

export default Model.extend({
  name: attr('string'),
  friendlyUrl: attr('string'),
  enabled: true,
  deleted: false,

  sports: hasMany('sport', { inverse: 'organization' }),
  users: hasMany('user', { inverse: 'organizations' })
})
