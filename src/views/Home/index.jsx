import React from 'react';
import View from './View';
import Panel from './Panel';
import Item from './Item';
import { modules } from '../config';

const implementedModules = modules.filter(m => m.component);

const Home = () => <View modules={implementedModules} RenderPanel={Panel} RenderItem={Item} />;

export default Home;
