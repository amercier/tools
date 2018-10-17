// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import type { Module } from '../config';

type Props = {
  module: Module,
};

const Page = ({ module }: Props) => {
  const { title, description, component } = module;

  const styles = {
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0',
    },
    title: {
      flexGrow: 1,
      margin: 0,
    },
    close: {
      minWidth: '32px',
      padding: 0,
    },
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div style={styles.titleContainer}>
        <Typography tag="h1" variant="h4" style={styles.title}>
          {title}
        </Typography>
        <Link to="/">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </div>

      {component && React.createElement(component)}
    </div>
  );
};

export default Page;
