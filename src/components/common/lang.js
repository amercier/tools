/* eslint-disable import/prefer-default-export */

export function noop() {
}

export function implode(separator, ...parts) {
  let result = '';
  for (let i = 0; i <= parts.length; i += 1) {
    if (parts[i]) {
      result += `${result && separator}${parts[i]}`;
    }
  }
  return result;
}

export function combinePrefixes(prefixes, suffix, separator = ' ') {
  return implode(
    separator,
    prefixes.map(prefix => prefix && `${prefix}${suffix}`),
  );
}
