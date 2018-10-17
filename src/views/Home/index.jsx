// @flow

import * as React from 'react';
import View from './View';
import { modules } from '../config';

const implementedModules = modules.filter(m => m.component);

<<<<<<< HEAD
const Home = () => <View modules={implementedModules} RenderPanel={Panel} RenderItem={Item} />;

export default Home;
=======
export default () => <View modules={implementedModules} />;
>>>>>>> wip
