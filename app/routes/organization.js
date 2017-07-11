import Ember from 'ember'

const {
  Route,
  get
} = Ember

export default Route.extend({
  model(params) {
    return this.get('store')
      .query('organization', { friendlyUrl: get(params, 'organization_path') })
      .then(result => get(result, 'firstObject'))
  }
})
