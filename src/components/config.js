import materialColors from 'material-colors-object';
import Base64EncoderDecoder from './Base64EncoderDecoder';
import PasswordGenerator from './PasswordGenerator';
import TiltShiftGenerator from './TiltShiftGenerator';
import UrlEncoderDecoder from './UrlEncoderDecoder';
import UnicodeCharacterPicker from './UnicodeCharacterPicker';
import WebsiteScreenshotGenerator from './WebsiteScreenshotGenerator';
import TravisConfigValidator from './TravisConfigValidator';

export const colors = {
  green: materialColors.green.shades[500],
  pink: materialColors.pink.shades[600],
  orange: materialColors.orange.shades[700],
  lightBlue: materialColors['light-blue'].shades[500],
  deepPurple: materialColors['deep-purple'].shades[500],
  yellow: materialColors.yellow.shades[600],
  teal: materialColors.teal.shades[500],
  red: materialColors.red.shades[500],
};

export const defaultTheme = [colors.green, colors.pink];

export const modules = [ // eslint-disable-line import/prefer-default-export
  {
    id: 'url-encoder',
    title: 'URL encoder/decoder',
    icon: 'compare_arrows',
    component: UrlEncoderDecoder,
    description: 'Encode or decode text using percent (URL) encoding.',
    theme: [colors.pink, colors.green],
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
    theme: [colors.orange, colors.lightBlue],
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
    theme: [colors.lightBlue, colors.orange],
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
    description: 'Travis CI Yaml config validator.',
    theme: [colors.deepPurple, colors.yellow],
  },
  {
    id: 'password-generator',
    title: 'Password generator',
    icon: 'visibility_off',
    component: PasswordGenerator,
    description: 'Generate a strong password and copy it to your clipboard.',
    theme: [colors.yellow, colors.deepPurple],
  },
  {
    id: 'website-screenshot',
    title: 'Website screenshot',
    icon: 'camera_alt',
    component: WebsiteScreenshotGenerator,
    description: 'Generate a screenshot from a website.',
    theme: [colors.teal, colors.red],
  },
  {
    id: 'tilt-shift',
    title: 'Tilt–shift generator',
    icon: 'blur_on',
    component: TiltShiftGenerator,
    description: 'Generate a screenshot from a website with a fancy tilt-shift effect.',
    theme: [colors.red, colors.teal],
  },
];
