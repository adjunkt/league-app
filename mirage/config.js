export default function() {
  const query = (modelType, queryParams, options) => {
    const queryKeys = Object.keys(options)
    const queryObject = {}

    queryKeys.forEach(key =>
        queryObject[key] = queryParams[options[key]])

    if (queryKeys.length) {
      return modelType.where(queryObject)
    }

    return modelType.all()
  }

  const getOrganziations = ({ organizations }, { queryParams }) =>
    query(organizations, queryParams, { friendlyName: 'friendlyName' })

  this.get('organizations', getOrganziations)
  this.get('sports')
  this.get('sports/:id')
  this.get('leagues')
  this.get('leagues/:id')
}
