import {
  Model,
  belongsTo,
  hasMany
} from 'ember-cli-mirage'

export default Model.extend({
  organization: belongsTo('organization', { inverse: 'sports' }),
  leagues: hasMany('league', { inverse: 'sport' })
})
