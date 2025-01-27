import React from 'react';
import { StyledInput } from './styled';

type InputProps = {
  type: string; 
  placeholder: string;
  id?: any;
  name: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
};

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required
    />
  );
};
