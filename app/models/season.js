import DS from 'ember-data'

const {
  Model,
  attr,
  belongsTo
} = DS

export default Model.extend({
  name: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),

  league: belongsTo('league', { inverse: 'seasons' }),
})
