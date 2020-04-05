import React from 'react';
import styled from '@emotion/styled'

const Header = () => {
  return (
    <StyledHeader>
      <p>me<sub>3</sub></p>

    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  padding: 1.5rem 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  
  p {
    margin: 0;
    padding: 0 1rem;
    text-align: center;
    line-height: 3rem;
    color: #555;
    font-size: 1rem;
    text-shadow: #fff 1px 1px 0;
  }
`;