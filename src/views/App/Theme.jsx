import React from 'react';
import { string, node, object, arrayOf, shape } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

const Theme = ({
  modules,
  defaultTheme,
  match,
  location,
  history,
  staticContext,
  children,
  ...props
}) => {
  const module = modules.find(({ id }) => `/${id}` === location.pathname);
  return (
    <MuiThemeProvider theme={module ? module.theme : defaultTheme} {...props}>
      {children}
    </MuiThemeProvider>
  );
};

Theme.propTypes = {
  modules: arrayOf(
    shape({
      id: string.isRequired,
      theme: object,
    }),
  ).isRequired,
  defaultTheme: object.isRequired, // eslint-disable-line react/forbid-prop-types
  match: object.isRequired, // eslint-disable-line react/forbid-prop-types
  location: object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
  staticContext: object, // eslint-disable-line react/forbid-prop-types
  children: node.isRequired,
};

Theme.defaultProps = {
  staticContext: null,
};

export default withRouter(Theme);
