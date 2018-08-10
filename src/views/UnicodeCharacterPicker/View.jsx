import React from 'react';
import { number, string, func, arrayOf, shape } from 'prop-types';
import { nameToId } from '../../lib/lang';

const View = ({
  RenderTabs, RenderCharacter,
  charactersMap, copiedCharacter, activeTabIndex,
  onTabChange, onCopy,
}) => {
  const activeCategory = charactersMap[activeTabIndex];
  const getOnCopy = character => (() => onCopy(character));
  return (
    <div>
      <RenderTabs
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
    </div>
  );
};

View.propTypes = {
  RenderTabs: func.isRequired,
  RenderCharacter: func.isRequired,

  charactersMap: arrayOf(shape({ name: string, icon: string, characters: string })).isRequired,
  copiedCharacter: string,
  activeTabIndex: number.isRequired,

  onTabChange: func.isRequired,
  onCopy: func.isRequired,
};

View.defaultProps = {
  copiedCharacter: null,
};

export default View;
