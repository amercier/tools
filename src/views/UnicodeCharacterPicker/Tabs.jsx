import React from 'react';
import { TabBar, TabBarScroller, Tab, TabIcon, TabIconText } from 'rmwc/Tabs';
import { number, string, func, arrayOf, shape } from 'prop-types';
import { nameToId } from '../../lib/lang';
import { eventDetailProperty } from '../../lib/dom';

const Tabs = ({
  charactersMap, activeTabIndex, onChange,
}) => {
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
      <TabBar activeTabIndex={activeTabIndex} onChange={eventDetailProperty(onChange, 'activeTabIndex')}>
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
