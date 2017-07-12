import { Model, belongsTo , hasMany} from 'ember-cli-mirage'

export default Model.extend({
  sport: belongsTo('sport', { inverse: 'leagues' }),
  players: hasMany('user', { inverse: 'leagues' }),
  teams: hasMany('team', { inverse: 'league' })
})
