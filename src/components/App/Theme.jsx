import React from 'react';
import { withRouter } from 'react-router-dom';
import { Theme } from 'rmwc/Theme';
import { defaultTheme } from '../config';

export default withRouter(({
  modules, location, match, history, staticContext, ...props
}) => {
  const module = modules.find(({ id }) => `/${id}` === location.pathname);
  const theme = module ? module.theme : defaultTheme;
  const [primary, secondary] = theme;
  const style = {
    '--mdc-theme-primary': primary.value,
    '--mdc-theme-primary-light': primary.lightValue,
    '--mdc-theme-primary-dark': primary.darkValue,
    '--mdc-theme-on-primary': primary.isDark ? '#fff' : '000',
    '--mdc-theme-secondary': secondary.value,
    '--mdc-theme-secondary-light': secondary.lightValue,
    '--mdc-theme-secondary-dark': secondary.darkValue,
    '--mdc-theme-on-secondary': secondary.isDark ? '#fff' : '000',
  };
  return <Theme style={style} data-path={location.pathname} {...props} />;
});
