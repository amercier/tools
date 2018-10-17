// @flow

import * as React from 'react';
import deepPurple from '@material-ui/core/colors/deepPurple';
import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import orange from '@material-ui/core/colors/orange';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import teal from '@material-ui/core/colors/teal';
import yellow from '@material-ui/core/colors/yellow';
import { createMuiTheme } from '@material-ui/core/styles';

import Base64EncoderDecoder from './Base64EncoderDecoder';
import PasswordGenerator from './PasswordGenerator';
import TiltShiftGenerator from './TiltShiftGenerator';
import UrlEncoderDecoder from './UrlEncoderDecoder';
import UnicodeCharacterPicker from './UnicodeCharacterPicker';
import WebsiteScreenshotGenerator from './WebsiteScreenshotGenerator';
import TravisConfigValidator from './TravisConfigValidator';

const createTheme = (primary: Object, secondary: Object): Object =>
  createMuiTheme({
    palette: { primary, secondary },
    typography: {
      useNextVariants: true,
    },
  });

export const defaultTheme: Object = createTheme(green, pink);

export type Module = {
  id: string,
  title: string,
  icon: string,
  component: React.Component<{}> | null | any, // FIXME
  description?: string,
  theme?: Object,
};

export const modules: Module[] = [
  {
    id: 'url-encoder',
    title: 'URL encoder/decoder',
    icon: 'compare_arrows',
    component: UrlEncoderDecoder,
    description: 'Encode or decode text using percent (URL) encoding.',
    theme: createTheme(pink, green),
  },
  {
    id: 'json-validator',
    title: 'JSON validator',
    icon: 'spellcheck',
    component: null,
  },
  {
    id: 'base64-encoder',
    title: 'Base64 encoder/decoder',
    icon: 'code',
    component: Base64EncoderDecoder,
    description: 'Encode or decode text using base64 encoding.',
    theme: createTheme(orange, lightBlue),
  },
  {
    id: 'base64-image',
    title: 'Base64 image',
    icon: 'developer_mode',
    component: null,
  },
  {
    id: 'unicode-characters',
    title: 'Unicode character picker',
    icon: 'colorize',
    component: UnicodeCharacterPicker,
    description: 'Copy fancy unicode characters to your clipboard.',
    theme: createTheme(lightBlue, orange),
  },
  {
    id: 'css-minifier',
    title: 'CSS minifier/gzipper',
    icon: 'straighten',
    component: null,
  },
  {
    id: 'favicon-generator',
    title: 'Favicon generator',
    icon: 'insert_photo',
    component: null,
  },
  {
    id: 'travis-validator',
    title: 'Travis.yml validator',
    icon: 'assignment_turned_in',
    component: TravisConfigValidator,
    description: 'Travis CI Yaml config validator.',
    theme: createTheme(deepPurple, yellow),
  },
  {
    id: 'password-generator',
    title: 'Password generator',
    icon: 'visibility_off',
    component: PasswordGenerator,
    description: 'Generate a strong password and copy it to your clipboard.',
    theme: createTheme(yellow, deepPurple),
  },
  {
    id: 'website-screenshot',
    title: 'Website screenshot',
    icon: 'camera_alt',
    component: WebsiteScreenshotGenerator,
    description: 'Generate a screenshot from a website.',
    theme: createTheme(teal, red),
  },
  {
    id: 'tilt-shift',
    title: 'Tilt–shift generator',
    icon: 'blur_on',
    component: TiltShiftGenerator,
    description: 'Generate a screenshot from a website with a fancy tilt-shift effect.',
    theme: createTheme(red, teal),
  },
];
