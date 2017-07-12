import DS from 'ember-data'

const {
  attr,
  belongsTo,
  Model
} = DS

export default Model.extend({
  name: attr('string'),
  enabled: true,
  deleted: false,

  sport: belongsTo('sport', { inverse: 'leagues' })
})
