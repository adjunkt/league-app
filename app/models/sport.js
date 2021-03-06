import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  belongsTo,
  hasMany
} = DS

export default HasManyQueryModel.extend({
  name: attr('string'),
  friendlyName: attr('string'),

  organization: belongsTo('organization', { inverse: 'sports' }),
  leagues: hasMany('league', { inverse: 'sport' })
})
