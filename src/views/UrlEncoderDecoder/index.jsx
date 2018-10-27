// @flow

import { urlEncode, urlDecode } from './url';
import AbstactEncoderDecoder from '../../shared/EncoderDecoder/Abstract';

export default class Base64EncoderDecoder extends AbstactEncoderDecoder {
  static encode = urlEncode;

  static decode = urlDecode;

  get isDecodeDisabled() {
    const { input } = this.state;
    const decoded = urlDecode(input);
    return input === '' || decoded === null || decoded === input;
  }
}
