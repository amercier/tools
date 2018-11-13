import React from 'react';
import { number, string, func, object, arrayOf, shape } from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
import { nameToId } from '../../lib/lang';

const styles = theme => ({
  root: {
    marginBottom: 4 * theme.spacing.unit,
  },
  tab: {
    flexShrink: 0,
  },
  tabLabel: {
    fontSize: theme.typography.pxToRem(14),
    whiteSpace: 'nowrap',
  },
  tabLabelWrapped: {
    fontSize: theme.typography.pxToRem(14),
    whiteSpace: 'nowrap',
  },
});

const Nav = ({ charactersMap, activeTabIndex, onChange, classes }) => (
  <Tabs
    value={activeTabIndex}
    onChange={(e, value) => onChange(value)}
    fullWidth
    indicatorColor="secondary"
    textColor="secondary"
    scrollable
    scrollButtons="on"
    className={classes.root}
  >
    {charactersMap.map(({ name, icon }) => (
      <Tab
        key={`tab-${nameToId(name)}`}
        icon={<Icon>{icon}</Icon>}
        label={name}
        classes={{
          root: classes.tab,
          label: classes.tabLabel,
          labelWrapped: classes.tabLabelWrapped,
        }}
      />
    ))}
  </Tabs>
);

Nav.propTypes = {
  activeTabIndex: number.isRequired,
  onChange: func.isRequired,
  charactersMap: arrayOf(shape({ name: string, icon: string })).isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Nav);
