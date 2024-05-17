import React from 'react';
import styled from '@emotion/styled';

const SkipLinkStyled = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;

  &:focus {
    top: 0;
  }
`;

const SkipLink: React.FC = () => {
  return <SkipLinkStyled href="#main">Skip to main content</SkipLinkStyled>;
};

export default SkipLink;
