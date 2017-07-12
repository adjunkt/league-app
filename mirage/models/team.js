import { Model, hasMany, belongsTo } from 'ember-cli-mirage'

export default Model.extend({
  players: hasMany('user', { inverse: 'teams' }),
  league: belongsTo('league', { inverse: 'teams' })
})
