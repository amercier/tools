// @flow

import * as React from 'react';
import View from './View';
import { modules } from '../config';

const implementedModules = modules.filter(m => m.component);

const Home = () => <View modules={implementedModules} />;

export default Home;
