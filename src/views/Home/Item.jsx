import React from 'react';
import { string, object, shape } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    height: '100%',
  },
  button: {
    height: '100%',
    width: '100%',
    display: 'block',
    textAlign: 'initial',
  },
  link: {
    height: '100%',
    display: 'block',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const Item = ({ module, classes }) => {
  const { id, title, description } = module;
  return (
    <Card className={classes.root}>
      <ButtonBase className={classes.button} tabIndex="-1">
        <Link to={id} title={title} className={classes.link}>
          <CardMedia title={title} image={`${id}-preview.png`} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </ButtonBase>
    </Card>
  );
};

Item.propTypes = {
  module: shape({
    id: string,
    title: string,
    description: string,
  }).isRequired,
  classes: object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(Item);
