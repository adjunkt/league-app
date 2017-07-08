import DS from 'ember-data'

const {
  Model,
  attr
} = Model

export default Model.extend({
  email: attr('email'),
  firstName: attr('string'),
  lastName: attr('string')
})
