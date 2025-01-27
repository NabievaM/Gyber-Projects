import React from 'react';
import { StyledSelect } from './styled';

type SelectProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
};

export const Select: React.FC<SelectProps> = ({ name, value, onChange, options }) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
