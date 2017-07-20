import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr,
  belongsTo,
  hasMany
} = DS

export default HasManyQueryModel.extend({
  name: attr('string'),
  enabled: true,
  deleted: false,

  players: hasMany('user', { inverse: 'leagues' }),
  seasons: hasMany('season', { inverse: 'league' }),
  sport: belongsTo('sport', { inverse: 'leagues' }),
  teams: hasMany('team', { inverse: 'league' })
})
