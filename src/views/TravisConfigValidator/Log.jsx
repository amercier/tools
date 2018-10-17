import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import LogEntry from './LogEntry';

const messageKey = ({ message, level }) =>
  `log-${level}-${message.replace(/ /g, '-').toLowerCase()}`;

const Log = ({ messages, RenderEntry }) =>
  messages.length ? (
    <div>
      {messages.map(message => (
        <RenderEntry key={messageKey(message)} {...message} />
      ))}
    </div>
  ) : null;

Log.propTypes = {
  messages: arrayOf(
    shape({
      level: string.isRequired,
      message: string.isRequired,
    }),
  ).isRequired,
  RenderEntry: func,
};

Log.defaultProps = {
  RenderEntry: LogEntry,
};

export default Log;
