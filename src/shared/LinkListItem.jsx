import React from 'react';
import { bool, string, node } from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

const ListItemWithRouter = withRouter(({
  location, match, history, staticContext, children, ...props
}) => (
  <ListItem selected={!!match} {...props}>
    {children}
  </ListItem>
));

const LinkListItem = ({ to, disabled, children, ...props }) => (
  disabled ? (
    <ListItem disabled>
      {children}
    </ListItem>
  ) : (
    <Route exact path={`/${to}`}>
      <Link to={to}>
        <ListItemWithRouter {...props}>
          {children}
        </ListItemWithRouter>
      </Link>
    </Route>
  )
);

LinkListItem.propTypes = {
  to: string.isRequired,
  disabled: bool,
  children: node.isRequired,
};

LinkListItem.defaultProps = {
  disabled: false,
};

export default LinkListItem;
