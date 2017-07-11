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
    query(organizations, queryParams, { friendlyUrl: 'friendlyUrl' })

  this.get('organizations', getOrganziations)
  this.get('sports/:id')
}
