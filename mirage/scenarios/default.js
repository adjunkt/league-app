export default function(server) {
  server.createList('organization', 3)
  server.createList('sport', 3, {
    organization: server.schema.organizations.find(1)
  })
}
