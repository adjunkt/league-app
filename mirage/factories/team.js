import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  random: { arrayElement }
} = faker

export default Factory.extend({
  name: arrayElement([
    'Rangers',
    'Black Hawks',
    'Penguins',
    'Wild',
    'Maple Leafs',
    'Canucks',
    'Flames'
  ]),
  enabled: true,
  deleted: false
})
