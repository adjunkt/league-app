import Ember from 'ember'

const {
  Route,
  get
} = Ember

const filterParams = params => ({ filter: { ...params }})

export default Route.extend({
  model(params) {
    const organizationId = get(this.modelFor('organization'), 'id')
    const organization = this.get('store')
      .peekRecord('organization', organizationId)
    const queryParams = filterParams({
      friendlyName: get(params, 'sport_path')
    })

    return organization.query('sports', queryParams)
      .then(sports => get(sports, 'firstObject'))
  }
})
