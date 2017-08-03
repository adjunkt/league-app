export const objectIsEmpty = object => Object.keys(object).length === 0

export const extract = filterParam => {
  const match = filterParam.match(/\[(.*?)\]/)
  return match ? match[1] : undefined
}

export const extractFilters = queryParams => {
  const query = {}

  Object.keys(queryParams).forEach(filter =>
    query[extract(filter)] = queryParams[filter])

  return query
}

export const query = (modelType, queryParams) => {
  const queryObject = extractFilters(queryParams)

  if (objectIsEmpty(queryObject)) {
    return modelType.where(queryObject)
  }

  return modelType.all()
}

export const getOrganziations = ({ organizations }, { queryParams }) =>
  query(organizations, queryParams)
