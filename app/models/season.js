import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  belongsTo,
  hasMany
} = DS

export default HasManyQueryModel.extend({
  name: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),

  league: belongsTo('league', { inverse: 'seasons' }),
  teams: hasMany('team', { inverse: 'seasons' })
})
