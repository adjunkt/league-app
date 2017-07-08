import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  company: { companyName }
} = faker

export default Factory.extend({
  name: companyName
})
