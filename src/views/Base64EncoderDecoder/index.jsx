import { base64EncodeUnicode, base64DecodeUnicode } from './base64';
import AbstactEncoderDecoder from '../../shared/EncoderDecoder/Abstract';

export default class Base64EncoderDecoder extends AbstactEncoderDecoder {
  static encode = base64EncodeUnicode;

  static decode = base64DecodeUnicode;
}
