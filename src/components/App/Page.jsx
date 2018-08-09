import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';
import { string, func, shape } from '../common/prop-types';

const Page = ({ module }) => {
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
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
      </Helmet>

      <div style={styles.titleContainer}>
        <Typography tag="h1" use="display1" style={styles.title}>
          {title}
        </Typography>
        <Link to="/">
          <Button dense theme="background text-primary-on-background" style={styles.close}>
            <ButtonIcon use="close" />
          </Button>
        </Link>
      </div>

      {React.createElement(component)}
    </div>
  );
};

Page.propTypes = {
  module: shape({
    id: string,
    title: string,
    description: string,
    component: func,
  }).isRequired,
};

export default Page;
