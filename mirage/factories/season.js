import moment from 'moment'
import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  list: { cycle }
} = faker

const isoDate = (...params) => moment(params).toISOString()

export default Factory.extend({
  name: cycle('Spring', 'Summer', 'Fall', 'Winter'),
  startDate: isoDate(2017, 1, 1),
  endDate: isoDate(2017, 3, 31)
})
