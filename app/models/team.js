import DS from 'ember-data'

const {
  Model,
  attr,
  hasMany,
  belongsTo
} = DS

export default Model.extend({
  name: attr('string'),
  enabled: attr('boolean'),
  deleted: attr('boolean'),

  players: hasMany('user', { inverse: 'teams' }),
  league: belongsTo('league', { inverse: 'teams' })
})
