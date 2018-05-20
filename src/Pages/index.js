import Base64EncoderDecoder from './Base64EncoderDecoder';
import PasswordGenerator from './PasswordGenerator';
import TiltShiftGenerator from './TiltShiftGenerator';
import UrlEncoderDecoder from './UrlEncoderDecoder';
import UnicodeCharacterPicker from './UnicodeCharacterPicker';
import WebsiteScreenshotGenerator from './WebsiteScreenshotGenerator';
import TravisConfigValidator from './TravisConfigValidator';

export default [
  {
    id: 'url-encoder',
    title: 'URL encoder/decoder',
    icon: 'compare_arrows',
    component: UrlEncoderDecoder,
    description: 'Encode or decode text using percent (URL) encoding.',
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
    description: 'Encode or decode text using base64 encoding.',
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
    description: 'Copy fancy unicode characters to your clipboard.',
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
    component: TravisConfigValidator,
    description: 'Travis CI Yaml config validator.'
  },
  {
    id: 'password-generator',
    title: 'Password generator',
    icon: 'visibility_off',
    component: PasswordGenerator,
    description: 'Generate a strong password and copy it to your clipboard.',
  },
  {
    id: 'website-screenshot',
    title: 'Website screenshot',
    icon: 'camera_alt',
    component: WebsiteScreenshotGenerator,
    description: 'Generate a screenshot from a website.',
  },
  {
    id: 'tilt-shift',
    title: 'Tilt–shift generator',
    icon: 'blur_on',
    component: TiltShiftGenerator,
    description: 'Generate a screenshot from a website with a fancy tilt-shift effect.',
  }
];
