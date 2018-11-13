import React, { lazy, Suspense } from 'react';
import { string, object, shape } from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';

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
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Page = ({ module, classes }) => {
  const { title, description, component } = module;

  const Component = lazy(() => import(`../${component}`));

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className={classes.titleContainer}>
        <Typography tag="h1" variant="h4" className={classes.title}>
          {title}
        </Typography>
        <Link to="/">
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Link>
      </div>

      <Suspense
        fallback={
          <div className={classes.progressContainer}>
            <CircularProgress size={128} thickness={1.5} />
          </div>
        }
      >
        <Component />
      </Suspense>
    </div>
  );
};

Page.propTypes = {
  module: shape({
    id: string,
    title: string,
    description: string,
    component: string,
  }).isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Page);
