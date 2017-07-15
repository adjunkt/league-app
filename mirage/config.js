const isEmpty = object => Object.keys(object).length === 0

const extract = filterParam => {
  const match = filterParam.match(/\[(.*?)\]/)
  return match ? match[1] : undefined
}

const extractFilters = queryParams => {
  const query = {}

  Object.keys(queryParams).forEach(filter =>
    query[extract(filter)] = queryParams[filter])

  return query
}

const query = (modelType, queryParams) => {
  const queryObject = extractFilters(queryParams)

  if (isEmpty(queryObject)) {
    return modelType.where(queryObject)
  }

  return modelType.all()
}

const getOrganziations = ({ organizations }, { queryParams }) =>
  query(organizations, queryParams)

export default function() {
  this.get('organizations', getOrganziations)
  this.get('sports')
  this.get('sports/:id')
  this.get('leagues')
  this.get('leagues/:id')
  this.get('users')
  this.get('users/:id')
  this.get('teams')
  this.get('teams/:id')
}
