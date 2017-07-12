import { Model, belongsTo } from 'ember-cli-mirage'

export default Model.extend({
  sport: belongsTo('sport', { inverse: 'leagues' })
})
