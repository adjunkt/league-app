import DS from 'ember-data'

const {
  Model,
  belongsTo
} = DS

export default Model.extend({
  user: belongsTo('user', { inverse: 'player' }),
  team: belongsTo('team', { inverse: 'players' })
})
