import React from 'react';
import styled from '@emotion/styled';
import primitiveicon from '../img/punkyicon.svg';
//import n2bicon from '../img/n2b-pencil.svg';
//import sknowicon from '../img/sknow.svg';

const FOEButton = (props) => {

  return (
    <StyledFOEButton color={props.color} className={props.checked}>
        {props.children}
        <div className="bg"></div>
    </StyledFOEButton>
  );
}

export default FOEButton;

const StyledFOEButton = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0,0,0,.4),
  inset 2px 4px 4px rgba(255,255,255,.4);
  z-index: 2;

  button {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 90px;
    border-width: 0px;
    border-radius: 50px;
    box-shadow: inset 2px 4px 4px -2px rgba(255, 255, 255, .6),
      0px 4px 4px rgba(0,0,0,.2);
    outline: none;
    z-index: 10;
  }
  button::before {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
    opacity: 0;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    transition: .4s;
    z-index: -10;
  }
  button::after {
    content: " ";
    display: block;
    height: 100%;
    width: 100%;
    border-width: 0px;
    border-radius: 50px;
    background-image: url(${primitiveicon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50px;
    transition: background-size 100ms ease-in-out;
  }

  .bg {
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
    opacity: 0;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    transition: .4s;
    z-index: -10;
  }



  ${props => props.color}

`;
