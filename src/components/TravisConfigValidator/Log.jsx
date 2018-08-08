import React from 'react';
import { Typography } from 'rmwc/Typography';
import LogEntry from './LogEntry';
import {
  string, func, arrayOf, shape,
} from '../common/prop-types';

const Log = ({ messages, RenderEntry }) => {
  if (!messages.length) {
    return null;
  }

  const entries = messages.map(({ level, message }, i) => {
    const id = `travis-validator-message-${i}`;
    return <RenderEntry key={id} {...{ level, message }} />;
  });

  return (
    <Typography tag="div" use="body1">
      {entries}
    </Typography>
  );
};

Log.propTypes = {
  messages: arrayOf(shape({
    level: string.isRequired,
    message: string.isRequired,
  })).isRequired,
  RenderEntry: func,
};

Log.defaultProps = {
  RenderEntry: LogEntry,
};

export default Log;
