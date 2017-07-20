import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  hasMany,
  belongsTo
} = DS

export default HasManyQueryModel.extend({
  name: attr('string'),
  enabled: attr('boolean'),
  deleted: attr('boolean'),

  players: hasMany('user', { inverse: 'teams' }),
  league: belongsTo('league', { inverse: 'teams' }),
  seasons: hasMany('season', { inverse: 'teams' })
})
