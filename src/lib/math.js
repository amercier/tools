const { min, max } = Math;

export function between(minValue, maxValue) {
  return value => min(maxValue, max(minValue, value));
}
