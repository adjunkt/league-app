let _server

const build = (type, ...resources) =>
  resources.map(resource => _server.create(type, resource))

export default function(server) {
  _server = server

  const org = server.create('organization', {
    name: 'Indoor Goals',
    friendlyName: 'indoor-goals'
  })

  const sport = org.createSport({
    name: 'Hockey',
    friendlyName: 'hockey',
  })
  org.createSport({
    name: 'Soccer',
    friendlyName: 'soccer',
  })

  sport.createLeague({
    name: 'Gold'
  })

  const league = sport.createLeague({
    name: 'Silver'
  })

  sport.createLeague({
    name: 'Bronze'
  })
}
