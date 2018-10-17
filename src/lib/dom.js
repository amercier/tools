// @flow

export function objectPropertyProperty(
  callback: (value: any) => void,
  property: string,
  nestedProperty: string,
): (event: Object) => void {
  return object => callback(object[property][nestedProperty]);
}

export function eventTargetProperty(
  callback: (value: any) => void,
  property: string = 'value',
): (event: Object) => void {
  return objectPropertyProperty(callback, 'target', property);
}

export function namedObjectPropertyProperty(
  name: string,
  callback: (name: string, value: any) => void,
  property: string,
  nestedProperty: string,
): (event: Object) => void {
  return object => callback(object[property][nestedProperty]);
}

export function namedEventTargetProperty(
  name: string,
  callback: (name: string, value: any) => void,
  property: string = 'value',
): (event: Object) => void {
  return namedObjectPropertyProperty(name, callback, 'target', property);
}
