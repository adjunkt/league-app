import { Model, belongsTo, hasMany } from 'ember-cli-mirage'

export default Model.extend({
  user: belongsTo('user', { inverse: 'player' }),
  team: belongsTo('team', { inverse: 'players' })
})
