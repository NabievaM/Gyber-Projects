import React from 'react';
import { HeaderWrapper, Title, Breadcrumb } from './styled';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Breadcrumb>
        <a href="/">Projects</a> / Invites
      </Breadcrumb>
      <Title>Invites</Title>
    </HeaderWrapper>
  );
};
