// @flow

export function base64EncodeUnicode(value: string): string {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, (match, p1) =>
      String.fromCharCode(+`0x${p1}`),
    ),
  );
}

export function base64DecodeUnicode(value: string): string | null {
  try {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(value)
        .split('')
        .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join(''),
    );
  } catch (error) {
    return null;
  }
}
