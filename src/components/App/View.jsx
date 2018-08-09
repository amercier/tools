import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Theme } from 'rmwc/Theme';
import { func } from '../common/prop-types';

const LocationAwareTheme = withRouter(({
  location, match, history, staticContext, ...props
}) => <Theme {...props} data-path={location.pathname} />);

const View = ({
  RenderHeader, RenderBody, onMenuToggle, ...bodyProps
}) => (
  <BrowserRouter>
    <LocationAwareTheme tag="div">
      <Helmet>
        <title>
          WebDev Tools
        </title>
        <meta name="description" content="A set of useful tools for web developers." />
      </Helmet>

      <RenderHeader title="Web Tools" onMenuToggle={onMenuToggle} />
      <RenderBody {...bodyProps} />
    </LocationAwareTheme>
  </BrowserRouter>
);

View.propTypes = {
  RenderHeader: func.isRequired,
  RenderBody: func.isRequired,
  onMenuToggle: func.isRequired,
};

export default View;
