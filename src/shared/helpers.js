export const removeSpaces = str => str.replace(/ /g, '');

export const mapObjectToQueryString = (obj, reducer, innerReducer = '') => {

  console.log(Object.entries(obj))
  const query = Object.entries(obj)
    .filter(([key, value]) => Boolean(String(key) + String(value)))
    .map(
      ([key, value]) => typeof value === 'object'
        ? key + innerReducer + mapObjectToQueryString(value, ';')
        : removeSpaces(key + innerReducer + value)
    )
    .join(reducer);

  return query;
}