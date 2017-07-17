import Ember from 'ember'

const {
  Route,
  get
} = Ember

const filterParams = params => ({ filter: { ...params }})

export default Route.extend({
  model(params) {
    const queryParams = filterParams({
      friendlyName: get(params, 'organization_path')
    })

    return this.get('store')
      .query('organization', queryParams)
      .then(organizations => get(organizations, 'firstObject'))
  }
})
