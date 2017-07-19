import moment from 'moment'

const isoDate = (...params) => moment(params).toISOString()

export default function(server) {
  const org = server.create('organization', {
    name: 'Indoor Goals',
    friendlyName: 'indoor-goals'
  })

  const sport = org.createSport({
    name: 'Hockey',
    friendlyName: 'hockey'
  })

  org.createSport({
    name: 'Soccer',
    friendlyName: 'soccer'
  })

  const league = sport.createLeague({
    name: 'Silver'
  })

  sport.createLeague({
    name: 'Gold'
  })

  sport.createLeague({
    name: 'Bronze'
  })

  const season = league.createSeason({
    name: 'Spring',
    startDate: isoDate(2017, 0, 1),
    endDate: isoDate(2017, 2, 31)
  })

  league.createSeason({
    name: 'Summer',
    startDate: isoDate(2017, 3, 1),
    endDate: isoDate(2017, 5, 30)
  })

  league.createSeason({
    name: 'Fall',
    startDate: isoDate(2017, 6, 1),
    endDate: isoDate(2017, 8, 29)
  })

  league.createSeason({
    name: 'Winter',
    startDate: isoDate(2017, 9, 1),
    endDate: isoDate(2017, 11, 31)
  })

  const team = season.createTeam({
    name: 'Smoking Guns'
  })

  season.createTeam({
    name: 'Bombers'
  })

  season.createTeam({
    name: 'Handsome'
  })

  const p1 = team.createPlayer({
    firstName: 'Kyle',
    lastName: 'Scherling',
    email: 'kyle.scherling@gmail.com'
  })

  const p2 = team.createPlayer({
    firstName: 'Deaven',
    lastName: 'Edmonson',
    email: 'deaven.edmonson@gmail.com'
  })

  const p3 = team.createPlayer({
    firstName: 'Fae',
    lastName: 'Scherling',
    email: 'fae.scherling@gmail.com'
  })

  league.players = [p1, p2, p3]
  league.save()
}
