import Ember from 'ember'

const {
  Route,
  get
} = Ember

export default Route.extend({
  model(params) {
    return this.modelFor('organization')
      .get('sports')
      .then(sports =>
        sports
          .filter(sport =>
            get(sport, 'friendlyName') === get(params, 'sport_path'))
          .get('firstObject')
      )
  }
})
