// @flow

const { min, max } = Math;

<<<<<<< HEAD
export function between(minValue, maxValue) {
=======
export function between(
  minValue: number,
  maxValue: number,
): (value: number) => number {
>>>>>>> wip
  return value => min(maxValue, max(minValue, value));
}
