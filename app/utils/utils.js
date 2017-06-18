export const pushToKey = (object, key, value) => {
  if (!object[key]) {
    object[key] = []
  }

  return object[key].push(value)
}
