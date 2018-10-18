// @flow

const { min, max } = Math;

export function between(minValue: number, maxValue: number): (value: number) => number {
  return value => min(maxValue, max(minValue, value));
}
