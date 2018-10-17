// @flow

import * as React from 'react';
import LogEntry from './LogEntry';
import { type Message } from './config';

const messageKey = ({ message, level }) =>
  `log-${level}-${message.replace(/ /g, '-').toLowerCase()}`;

type Props = {
  RenderEntry: typeof LogEntry,
  messages: Message[],
};

const Log = ({ messages, RenderEntry }: Props) =>
  messages.length > 0 ? (
    <div>
      {messages.map(message => (
        <RenderEntry key={messageKey(message)} {...message} />
      ))}
    </div>
  ) : null;

Log.defaultProps = {
  RenderEntry: LogEntry,
};

export default Log;
