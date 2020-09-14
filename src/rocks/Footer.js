import React from 'react';

import styled from '@emotion/styled'



const Footer = () => {

  return (
    <StyledFooter>

      <p>~ <a href="https://primitivedigital.uk" title="Website crafted by Primitive Digital">primitive digital</a> &amp; <a href="https://primitivehosting.uk" title="Wordpress, Linux and Windows Hosting">primitive hosting</a> | it's all about sme ~</p>
      <Brand>
        <a href="https://primitivedigital.uk" title="Website crafted by Primitive Digital">
          <img src="https://shaunknowles.uk/wp-content/themes/shaunknowles/build/static/media/primitive.bc19edb5.svg" alt="Website crafted by Primitive Digital" />
        </a>
      </Brand>
      <p>~ <a href="https://sknow.it" title="Digital design and development contractor">sknow.it</a> ltd | enterprise consultancy ~</p>

    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  padding: 1.5rem 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #cdd1d6;
  background-color: #dee1e5;
  font-weight: 300;
  color: #555;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  
  p {
    margin: 0; padding: 0 1rem;
    text-align: center;
    line-height: 3rem;

    a {
      font-weight: bold;
      text-decoration: none;
      color: inherit;
    }
  }

  span {
    margin-left: 2px;
    font-weight: 400;
  }



  //sm
  @media screen and (min-width: 576px) {
    letter-spacing: 1px;
  }

  //md
  @media screen and (max-width: 768px) {
    position: relative;
    flex-wrap: wrap;
    line-height: 4rem;

    p {width: 100%;}
    div a { width: 100%; padding-top: .5rem;}
    
  }

`;

const Brand = styled.div`

  height: 50px;
  width: 200px;
  padding: 0 10px 20px;
  opacity: .5;

  a { display: block; margin: auto; }
`;
