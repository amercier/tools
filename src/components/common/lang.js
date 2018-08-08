import { between } from './math';

export const noop = () => {};
export const identity = value => value;

// TODO Remove unused
export function implode(separator, ...parts) {
  let result = '';
  for (let i = 0; i <= parts.length; i += 1) {
    if (parts[i]) {
      result += `${result && separator}${parts[i]}`;
    }
  }
  return result;
}

// TODO Remove unused
export function combinePrefixes(prefixes, suffix, separator = ' ') {
  return implode(
    separator,
    prefixes.map(prefix => prefix && `${prefix}${suffix}`),
  );
}

export function auto(setting, minValue, maxValue) {
  if (setting === 'auto') {
    return between(minValue, maxValue);
  }
  return identity;
}
