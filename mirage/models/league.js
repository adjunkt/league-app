import { Model, belongsTo , hasMany} from 'ember-cli-mirage'

export default Model.extend({
  players: hasMany('user', { inverse: 'leagues' }),
  seasons: hasMany('season', { inverse: 'leagues' }),
  sport: belongsTo('sport', { inverse: 'leagues' }),
  teams: hasMany('team', { inverse: 'league' })
})
