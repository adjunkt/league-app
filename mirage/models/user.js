import {
  Model,
  hasMany
} from 'ember-cli-mirage'

export default Model.extend({
  organizations: hasMany('organization', { inverse: 'users' }),
  leagues: hasMany('league', { inverse: 'players' }),
  teams: hasMany('team', { inverse: 'players' })
})
