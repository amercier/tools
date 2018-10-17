// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import type { Module } from '../config';

type Props = {
  modules: Module[],
  defaultTheme: Object,
  children: React.Node,
  match: Object,
  location: Object,
  history: Object,
  staticContext?: Object,
};

const Theme = ({
  modules,
  defaultTheme,
  match,
  location,
  history,
  staticContext,
  children,
  ...props
}: Props) => {
  const module = modules.find(({ id }) => `/${id}` === location.pathname);
  return (
    <MuiThemeProvider theme={module ? module.theme : defaultTheme} {...props}>
      {children}
    </MuiThemeProvider>
  );
};

Theme.defaultProps = {
  staticContext: null,
};

export default withRouter(Theme);
