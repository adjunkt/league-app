import DS from 'ember-data'

const {
  attr,
  belongsTo,
  hasMany,
  Model
} = DS

export default Model.extend({
  name: attr('string'),
  friendlyName: attr('string'),

  organization: belongsTo('organization', { inverse: 'sports' }),
  leagues: hasMany('league', { inverse: 'sport' })
})
