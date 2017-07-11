import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  list: { cycle }
} = faker

export default Factory.extend({
  name: cycle('Gold', 'Silver', 'Bronze'),
  enabled: true,
  deleted: false
})
