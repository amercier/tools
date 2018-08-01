import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardPrimaryAction, CardMedia } from 'rmwc/Card';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import pages from './Pages';

import './Home.scss';

export default () => (
  <Grid className="home-tools-list">
    {pages.map(({ id, title, icon, description, component }) => {
      return component && (
        <GridCell key={id} align="left" phone="4" tablet="4" desktop="3">
          <Card>
            <Link to={id}>
              <CardPrimaryAction>
                <CardMedia sixteenByNine style={{backgroundImage: `url(${id}-preview.png)`}}/>
                <div style={{padding: '0 1rem 1rem 1rem'}}>
                  <Typography use="headline6" tag="h2">{title}</Typography>
                  <Typography use="body1" theme="text-secondary-on-light">{description}</Typography>
                </div>
              </CardPrimaryAction>
            </Link>
          </Card>
        </GridCell>
      );
    })}
  </Grid>
);
