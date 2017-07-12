import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  list: { cycle }
} = faker

export default Factory.extend({
  name: cycle('Indoor Goals', 'Mt. View Ice Arena', 'Valley Ice Arena'),
  friendlyName: cycle('indoor-goals', 'mt-view-ice-arena', 'valley-ice-arena')
})
