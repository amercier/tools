import Base64EncoderDecoder from './Base64EncoderDecoder';
import PasswordGenerator from './PasswordGenerator';
import TiltShiftGenerator from './TiltShiftGenerator';
import UrlEncoderDecoder from './UrlEncoderDecoder';
import UnicodeCharacterPicker from './UnicodeCharacterPicker';

export default [
  {
    id: 'url-encoder',
    title: 'URL encoder/decoder',
    icon: 'compare_arrows',
    component: UrlEncoderDecoder,
  },
  {
    id: 'json-validator',
    title: 'JSON validator',
    icon: 'spellcheck',
  },
  {
    id: 'base64-encoder',
    title: 'Base64 encoder/decoder',
    icon: 'code',
    component: Base64EncoderDecoder,
  },
  {
    id: 'base64-image',
    title: 'Base64 image',
    icon: 'developer_mode',
  },
  {
    id: 'unicode-characters',
    title: 'Unicode character picker',
    icon: 'colorize',
    component: UnicodeCharacterPicker,
  },
  {
    id: 'css-minifier',
    title: 'CSS minifier/gzipper',
    icon: 'straighten',
  },
  {
    id: 'favicon-generator',
    title: 'Favicon generator',
    icon: 'insert_photo',
  },
  {
    id: 'travis-validator',
    title: 'Travis.yml validator',
    icon: 'assignment_turned_in',
  },
  {
    id: 'password-generator',
    title: 'Password generator',
    icon: 'visibility_off',
    component: PasswordGenerator
  },
  {
    id: 'tilt-shift',
    title: 'Tilt–shift generator',
    icon: 'photo_camera',
    component: TiltShiftGenerator,
  }
];
