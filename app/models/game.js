import DS from 'ember-data'
import HasManyQueryModel from './has-many-query-model'

const {
  attr
} = DS

export default HasManyQueryModel.extend({
  date: attr('date'),
  deleted: false
})
