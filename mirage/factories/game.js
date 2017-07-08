import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  date: { recent }
} = faker


const from = () => Date.now()

export default Factory.extend({
  date: recent
})
