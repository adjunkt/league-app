import Ember from 'ember'

const {
  Route,
  get
} = Ember

const filterParams = (params) => ({ filter: { ...params }})

export default Route.extend({
  model(params) {
    return this.get('store')
      .query(
        'organization',
        filterParams({ friendlyName: get(params, 'organization_path') })
      ).then(result => get(result, 'firstObject'))
  }
})
