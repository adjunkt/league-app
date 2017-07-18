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

  // league.createSeason({
  //   name: 'Spring',
  //   startDate: ,
  //   endDate:
  // })
  //
  // league.createSeason({
  //   name: 'Summer',
  //   startDate: ,
  //   endDate:
  // })
  //
  // league.createSeason({
  //   name: 'Fall',
  //   startDate: ,
  //   endDate:
  // })
  //
  // league.createSeason({
  //   name: 'Winter',
  //   startDate: ,
  //   endDate:
  // })

  const team = league.createTeam({
    name: 'Smoking Guns'
  })

  league.createTeam({
    name: 'Bombers'
  })

  league.createTeam({
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
