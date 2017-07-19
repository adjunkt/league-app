import DS from 'ember-data'

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS

export default Model.extend({
  name: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),

  league: belongsTo('league', { inverse: 'seasons' }),
  teams: hasMany('team', { inverse: 'seasons' })
})
