// @flow

export function urlEncode(value: string) {
  return encodeURIComponent(value)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
}

export function urlDecode(value: string) {
  try {
    return decodeURIComponent(value.replace(/\+/g, ' '));
  } catch (error) {
    return value;
  }
}
