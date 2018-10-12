import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { func } from 'prop-types';

const View = ({
  RenderTheme, RenderHeader, RenderBody, onMenuToggle, ...bodyProps
}) => (
  <BrowserRouter>
    <RenderTheme modules={bodyProps.modules} defaultTheme={bodyProps.defaultTheme}>
      <Helmet>
        <title>
          WebDev Tools
        </title>
        <meta name="description" content="A set of useful tools for web developers." />
      </Helmet>

      <RenderHeader title="Web Tools" onMenuToggle={onMenuToggle} />
      <RenderBody {...bodyProps} />
    </RenderTheme>
  </BrowserRouter>
);

View.propTypes = {
  RenderTheme: func.isRequired,
  RenderHeader: func.isRequired,
  RenderBody: func.isRequired,
  onMenuToggle: func.isRequired,
};

export default View;
