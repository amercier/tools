// @flow

export function noop() {}

export function identity<T>(value: T): T {
  return value;
}

export const nameToId: (name: string) => string = name => name.replace(/\s+/, '-').toLowerCase();
