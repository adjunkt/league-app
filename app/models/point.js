import DS from 'ember-data'

const {
  Model,
  attr
} = DS

export default Model.extend({
  period: attr('number'),
  time: attr('string'),
  deleted: false
})
