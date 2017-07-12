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

  sport.createLeague({
    name: 'Gold'
  })

  sport.createLeague({
    name: 'Silver'
  })

  sport.createLeague({
    name: 'Bronze'
  })
}
