import Ember from 'ember'

const {
  Route,
  get
} = Ember

export default Route.extend({
  model() {
    const organizationId = get(this.modelFor('organization'), 'id')
    const organization = this.get('store')
      .peekRecord('organization', organizationId)

    return organization.get('sports')
  }
})
