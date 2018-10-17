// @flow

import { between } from './math';

export const noop: () => void = () => {};
export const identity: (value: any) => any = value => value;

export const nameToId: (name: string) => string = name =>
  name.replace(/\s+/, '-').toLowerCase();

export function auto(
  setting: string | number,
  ...args: number[]
): (value: number) => number {
  if (setting === 'auto') {
    return between(...args);
  }
  return identity;
}
