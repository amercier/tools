import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardPrimaryAction, CardMedia } from 'rmwc/Card';
import { GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import { string, shape } from '../../lib/prop-types';

const Cell = ({ module }) => {
  const {
    id, title, description, component,
  } = module;

  if (!component) {
    return null;
  }

  const styles = {
    containers: {
      height: '100%',
    },
    media: {
      backgroundImage: `url(${id}-preview.png)`,
    },
    content: {
      padding: '0 1rem 1rem 1rem',
    },
  };
  return (
    <GridCell key={id} align="left" phone="4" tablet="4" desktop="3">
      <Card style={styles.containers}>
        <Link to={id} style={styles.containers}>
          <CardPrimaryAction style={styles.containers}>
            <CardMedia sixteenByNine style={styles.media} />
            <div style={styles.content}>
              <Typography use="headline6" tag="h2">
                {title}
              </Typography>
              <Typography use="body1" theme="text-secondary-on-light">
                {description}
              </Typography>
            </div>
          </CardPrimaryAction>
        </Link>
      </Card>
    </GridCell>
  );
};

Cell.propTypes = {
  module: shape({
    id: string,
    title: string,
    description: string,
  }).isRequired,
};

export default Cell;
