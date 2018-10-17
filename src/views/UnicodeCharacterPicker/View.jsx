// @flow

import * as React from 'react';
import { nameToId } from '../../lib/lang';

import Character from './Character';
import Notification from './Notification';
import Nav from './Nav';
import { type CharacterSet } from './config';

type Props = {
  RenderNav: typeof Nav,
  RenderCharacter: typeof Character,
  RenderNotification: typeof Notification,

  charactersMap: CharacterSet[],
  copiedCharacter?: string,
  activeTabIndex: number,
  isNotificationClosed: boolean,

  onTabChange: (activeTabIndex: number) => void,
  onCopy: (copiedCharacter: string) => void,
  onNotificationClose: () => void,
};

const View = ({
  RenderNav, RenderCharacter, RenderNotification,
  charactersMap, copiedCharacter, activeTabIndex, isNotificationClosed,
  onTabChange, onCopy, onNotificationClose,
}: Props) => {
  const activeCategory = charactersMap[activeTabIndex];
  const getOnCopy = character => (() => onCopy(character));
  return (
    <div>
      <RenderNav
        charactersMap={charactersMap}
        activeTabIndex={activeTabIndex}
        onChange={onTabChange}
      />

      <div>
        {[...activeCategory.characters].map(character => (
          <RenderCharacter
            key={`character-${nameToId(activeCategory.name)}-${character}`}
            character={character}
            copied={character === copiedCharacter}
            onCopy={getOnCopy(character)}
          />
        ))}
      </div>

      <RenderNotification
        copiedCharacter={copiedCharacter}
        closed={isNotificationClosed}
        onClose={onNotificationClose}
      />
    </div>
  );
};

View.defaultProps = {
  RenderNav: Nav,
  RenderCharacter: Character,
  RenderNotification: Notification,
  copiedCharacter: undefined,
};

export default View;
