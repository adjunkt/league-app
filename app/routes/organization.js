import Ember from 'ember'

const {
  Route,
  get
} = Ember

const filterParams = params => ({ filter: { ...params }})

export default Route.extend({
  model({ organization_path }) {
    const queryParams = filterParams({ friendlyName: organization_path })

    return this.get('store')
      .query('organization', queryParams)
      .then(organizations => get(organizations, 'firstObject'))
  }
})
