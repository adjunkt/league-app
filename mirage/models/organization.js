import {
  Model,
  hasMany
} from 'ember-cli-mirage'

export default Model.extend({
  sports: hasMany('sport', { inverse: 'organization' })
})
