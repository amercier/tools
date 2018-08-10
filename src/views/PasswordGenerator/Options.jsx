import React from 'react';
import LabeledSlider from '../../shared/LabeledSlider';
import Switch from '../../shared/Switch';
import { number, bool, func } from '../../lib/prop-types';
import { minLength, maxLength } from './config';

const Options = ({
  length, numbers, symbols, uppercase, excludeSimilarCharacters,
  onOptionChange,
}) => {
  function getOnOptionChange(name, triggerUpdate = true) {
    return value => onOptionChange(name, value, triggerUpdate);
  }

  return (
    <div>
      <LabeledSlider
        className="password-generator-slider"
        value={length}
        min={minLength}
        max={maxLength}
        step={1}
        discrete
        labelWidth={6.5}
        onInput={getOnOptionChange('length', false)}
        onChange={getOnOptionChange('length')}
      >
        {/* TODO Remove exception after ESLint 5 upgrade */}
        Length ({length /* eslint-disable-line react/jsx-one-expression-per-line */})
      </LabeledSlider>

      <div className="password-generator-switches">
        <Switch checked={numbers} onChange={getOnOptionChange('numbers')}>
          Numbers
        </Switch>
        <Switch checked={symbols} onChange={getOnOptionChange('symbols')}>
          Symbols
        </Switch>
        <Switch checked={uppercase} onChange={getOnOptionChange('uppercase')}>
          Uppercase characters
        </Switch>
        <Switch checked={excludeSimilarCharacters} onChange={getOnOptionChange('excludeSimilarCharacters')}>
          Exclude similar characters
        </Switch>
      </div>
    </div>
  );
};

Options.propTypes = {
  length: number.isRequired,
  numbers: bool.isRequired,
  symbols: bool.isRequired,
  uppercase: bool.isRequired,
  excludeSimilarCharacters: bool.isRequired,
  onOptionChange: func.isRequired,
};

export default Options;
