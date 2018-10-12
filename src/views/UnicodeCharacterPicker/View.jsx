import React from 'react';
import { bool, number, string, func, arrayOf, shape } from 'prop-types';
import { nameToId } from '../../lib/lang';

const View = ({
  RenderNav, RenderCharacter, RenderNotification, RenderKbd,
  charactersMap, copiedCharacter, activeTabIndex, isNotificationClosed,
  onTabChange, onCopy, onNotificationClose,
}) => {
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
        {Array.from(activeCategory.characters).map(character => (
          <RenderCharacter
            key={`character-${nameToId(activeCategory.name)}-${character}`}
            character={character}
            copied={character === copiedCharacter}
            onCopy={getOnCopy(character)}
          />
        ))}
      </div>

      <RenderNotification
        RenderKbd={RenderKbd}
        copiedCharacter={copiedCharacter}
        closed={isNotificationClosed}
        onClose={onNotificationClose}
      />
    </div>
  );
};

View.propTypes = {
  RenderNav: func.isRequired,
  RenderCharacter: func.isRequired,
  RenderNotification: func.isRequired,
  RenderKbd: func.isRequired,

  charactersMap: arrayOf(shape({ name: string, icon: string, characters: string })).isRequired,
  copiedCharacter: string,
  activeTabIndex: number.isRequired,
  isNotificationClosed: bool.isRequired,

  onTabChange: func.isRequired,
  onCopy: func.isRequired,
  onNotificationClose: func.isRequired,
};

View.defaultProps = {
  copiedCharacter: null,
};

export default View;
