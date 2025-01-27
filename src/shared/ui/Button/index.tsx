import React from 'react';
import { StyledButton } from './styled';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
