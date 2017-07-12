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

  sport: belongsTo('sport', { inverse: 'leagues' }),
  players: hasMany('user', { inverse: 'leagues' }),
  teams: hasMany('team', { inverse: 'league' }),
})
