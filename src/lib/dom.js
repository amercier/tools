export function objectPropertyProperty(callback, property, nestedProperty) {
  return object => callback(object[property][nestedProperty]);
}

export function eventDetailProperty(callback, property = 'value') {
  return objectPropertyProperty(callback, 'detail', property);
}

export function eventTargetProperty(callback, property = 'value') {
  return objectPropertyProperty(callback, 'target', property);
}
