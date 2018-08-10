import { between } from './math';

export const noop = () => {};
export const identity = value => value;

export const nameToId = name => name.replace(/\s+/, '-').toLowerCase();

export function auto(setting, minValue, maxValue) {
  if (setting === 'auto') {
    return between(minValue, maxValue);
  }
  return identity;
}
