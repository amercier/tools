// @flow

import * as React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

type Props = {
  to: string,
  disabled?: boolean,
  children: React.Node,
};

type ListItemWithRouterProps = {
  location: Object,
  match: Object,
  history: Object,
  staticContext: Object,
  children: React.Node,
  props?: Object,
};

const ListItemWithRouter = withRouter(
  ({ location, match, history, staticContext, children, ...props }: ListItemWithRouterProps) => (
    <ListItem selected={!!match} {...props}>
      {children}
    </ListItem>
  ),
);

const LinkListItem = ({ to, disabled, children, ...props }: Props) =>
  disabled ? (
    <ListItem disabled>{children}</ListItem>
  ) : (
    <Route exact path={`/${to}`}>
      <Link to={to}>
        <ListItemWithRouter {...props}>{children}</ListItemWithRouter>
      </Link>
    </Route>
  );

LinkListItem.defaultProps = {
  disabled: false,
};

export default LinkListItem;
