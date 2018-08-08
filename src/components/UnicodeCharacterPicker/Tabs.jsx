import React from 'react';
import {
  TabBar, TabBarScroller, Tab, TabIcon, TabIconText,
} from 'rmwc/Tabs';
import { nameToId } from '../common/lang';
import {
  number, string, func, arrayOf, shape,
} from '../common/prop-types';

const Tabs = ({
  charactersMap, activeTabIndex, onChange,
}) => {
  const onChangeEvent = ({ detail }) => onChange(detail.activeTabIndex);

  const styles = {
    tabBar: {
      marginBottom: '2rem',
    },
    tab: {
      paddingTop: '0.5rem',
    },
  };
  return (
    <TabBarScroller style={styles.tabBar}>
      <TabBar activeTabIndex={activeTabIndex} onChange={onChangeEvent}>
        {charactersMap.map(({ name, icon }) => (
          <Tab key={`tab-${nameToId(name)}`} style={styles.tab}>
            <TabIcon>
              {icon}
            </TabIcon>
            <TabIconText>
              {name}
            </TabIconText>
          </Tab>
        ))}
      </TabBar>
    </TabBarScroller>
  );
};

Tabs.propTypes = {
  activeTabIndex: number.isRequired,
  onChange: func.isRequired,
  charactersMap: arrayOf(shape({ name: string, icon: string })).isRequired,
};

export default Tabs;
