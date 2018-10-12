export function objectPropertyProperty(callback, property, nestedProperty) {
  return object => callback(object[property][nestedProperty]);
}

export function eventTargetProperty(callback, property = 'value') {
  return objectPropertyProperty(callback, 'target', property);
}
