import Ember from 'ember'

const {
  Route,
  get
} = Ember

export default Route.extend({
  model(params) {
    const organizationId = get(this.modelFor('organization'), 'id')
    const organization = this.get('store')
      .peekRecord('organization', organizationId)

    return organization.get('sports').then(sports =>
      sports
        .filter(sport =>
          get(sport, 'friendlyName') === get(params, 'sport_path'))
        .get('firstObject')
    )
  }
})
