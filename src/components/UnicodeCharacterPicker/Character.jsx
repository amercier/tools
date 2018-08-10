import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { bool, string, func } from '../../lib/prop-types';

import './Character.scss';

const Character = ({ character, copied, onCopy }) => (
  <CopyToClipboard text={character} onCopy={onCopy}>
    <span className="unicode-characters-character">
      {character}
      {copied ? (
        <span className="unicode-characters-character__copied">
          ✓ copied
        </span>
      ) : null}
    </span>
  </CopyToClipboard>
);

Character.propTypes = {
  character: string.isRequired,
  copied: bool.isRequired,
  onCopy: func.isRequired,
};

export default Character;
