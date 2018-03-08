import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardPrimaryAction, CardMedia } from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import pages from './Pages';

export default () => (
  <div>
    {pages.map(({ id, title, component}) => {
      return component && (
        <Card key={id} style={{width: '20rem'}}>
          <Link to={id}>
            <CardPrimaryAction>
              <CardMedia sixteenByNine style={{backgroundImage: 'url(url-encoder-preview.png)'}}/>
              <div style={{padding: '0 1rem 1rem 1rem'}}>
                <Typography use="title" tag="h2">{title}</Typography>
              </div>
            </CardPrimaryAction>
          </Link>
        </Card>
      );
    })}
  </div>
);
