import React from 'react';
import View from './View';
import Panel from './Panel';
import Item from './Item';
import { modules } from '../config';

const implementedModules = modules.filter(m => m.component);

export default () => <View modules={implementedModules} RenderPanel={Panel} RenderItem={Item} />;
