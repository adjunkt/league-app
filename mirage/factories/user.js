import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  internet: { email },
  name: { firstName, lastName }
} = faker

export default Factory.extend({
  email,
  firstName,
  lastName,
  enabled: true,
  deleted: false
})
