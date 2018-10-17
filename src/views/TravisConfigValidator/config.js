// @flow

export type Message = {
  level: string,
  message: string,
};

export const parserUrl = 'https://travis-yml.herokuapp.com/v1/parse';
export const parserAuthUsername = '';
export const parserAuthPassword = 'abc123';

export const textarea = {
  rows: 'auto',
  minRows: 4,
  maxRows: 20,
};

export const logIcons = {
  info: 'info',
  warn: 'warning',
  error: 'error',
  default: 'message',
};
