import { Model, hasMany } from 'ember-cli-mirage'

export default Model.extend({
  leagues: hasMany('league', { inverse: 'seasons' })
})
