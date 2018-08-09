const { min, max } = Math;

export function between(minValue, maxValue) { // eslint-disable-line import/prefer-default-export
  return value => min(maxValue, max(minValue, value));
}
