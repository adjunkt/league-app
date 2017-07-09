import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  date: { recent }
} = faker

export default Factory.extend({
  date: recent
})
