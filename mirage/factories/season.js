import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  list: { cycle }
} = faker

export default Factory.extend({
  name: () => cycle('Spring', 'Summer', 'Fall', 'Winter')
})
