import React from 'react';
import { nameToId } from '../common/lang';
import {
  number, string, func, arrayOf, shape,
} from '../common/prop-types';

const View = ({
  RenderTabs, RenderCharacter,
  charactersMap, copiedCharacter, activeTabIndex,
  onTabChange, onCopy,
}) => {
  const activeCategory = charactersMap[activeTabIndex];
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
            onCopy={() => onCopy(character)}
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
