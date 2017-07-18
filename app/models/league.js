import DS from 'ember-data'

const {
  attr,
  belongsTo,
  hasMany,
  Model
} = DS

export default Model.extend({
  name: attr('string'),
  enabled: true,
  deleted: false,

  players: hasMany('user', { inverse: 'leagues' }),
  seasons: hasMany('season', { inverse: 'league' }),
  sport: belongsTo('sport', { inverse: 'leagues' }),
  teams: hasMany('team', { inverse: 'league' })
})
