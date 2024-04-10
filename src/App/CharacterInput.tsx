import { Autosuggest } from 'braid-design-system';
import { useState } from 'react';

interface CharacterInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export function CharacterInput(props: CharacterInputProps) {
  const defaultOption = { value: '', text: '' };
  const selectedOption =
    options.find((x) => x.value === props.value) ?? defaultOption;

  const [displayValue, setDisplayValue] = useState(selectedOption);

  return (
    <Autosuggest
      id="character-input"
      label="Character"
      value={displayValue}
      suggestions={options}
      onChange={(option) => {
        if (option.value) {
          setDisplayValue({ text: option.text, value: option.value });
          props.onChange(option.value);
        } else {
          setDisplayValue({ text: option.text, value: '' });
        }
      }}
      onClear={() => {
        setDisplayValue(defaultOption);
        props.onClear();
      }}
    />
  );
}

const options = [
  { value: 'samwise55', text: 'Sam' },
  { value: 'frodothegreat', text: 'Frodo' },
  { value: 'crazyboromir', text: 'Boromir' },
];
