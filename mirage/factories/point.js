import {
  Factory,
  faker
} from 'ember-cli-mirage'

const {
  random: { arrayElement }
} = faker

const PERIOD_LENGTH = 20

const secs = [...Array(60).keys()].map(s => s.toString())
const mins = (length) => [...Array(length + 1).keys()].map(m => m.toString())
const pad = (seconds) => seconds.map(sec => (sec.length > 1) ?  `0${s}` : s)
const time = length => `${arrayElement(mins(length))}:${arrayElement(secs)}`

export default Factory.extend({
  period: arrayElement([1, 2, 3]),
  time: () => time(PERIOD_LENGTH),
  deleted: false
})
