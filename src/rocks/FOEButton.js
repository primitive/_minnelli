import React from 'react';
//import { keyframes, Global } from '@emotion/core';
import styled from '@emotion/styled';
import primitiveicon from '../img/punkyicon.svg';

const FOEButton = ({props }) => {

  const handleClick = (e) => {
    //setDisplay(display.button.map(display.button => (display.button[id] === id ? { ...button, done } : button)));
    console.log('e= ' + e)
    console.log('id= ' + e.substring(4))

    /*

        prevState => ({
      [name]: !prevState[name]
    }),

    */
    //setButtons(workbuttons);
  };

  return (
    <StyledButton key={props.id} className="col">
      <FOEButton color={props.color}>
        <button
          onClick={({ target }) => handleClick(target.id)}
          label={props.label}
          id={props.id}>
        </button>
        <div className="bg"></div>
      </FOEButton>
    </StyledButton>
  );
}

export default FOEButton;

const StyledButton = styled.div`
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

  button#work1::before {
    background-color: #fbf1f3;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='84' viewBox='0 0 126 84'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%231e0d10' fill-opacity='0.06'%3E%3Cpath d='M126 83v1H0v-2h40V42H0v-2h40V0h2v40h40V0h2v40h40V0h2v83zm-2-1V42H84v40h40zM82 42H42v40h40V42zm-50-6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm96 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-42 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm30-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM20 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24-42a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  button#work2::before {
    background-color: #f7f5f9;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 4), rgba(0, 165, 70, .6) ), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23070707' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  button#work3::before {
    background-color: #f9f9f9;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239cac92' fill-opacity='0.15' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
  }
  button#play4::before {
    background-color: #f1f6f5;
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%230f52ba' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E");
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
  }

  button:hover {
    box-shadow: inset 2px 2px 4px rgba(0,0,0,.1),
  }

  button:active {
    border-width: 0px;
    box-shadow: inset 2px 2px 4px rgba(0,0,0,.1),
    inset -2px -2px 4px rgba(255, 255,255, .4);

    &::before {
      height: 130vw;
      width: 130vw;
      transition: height 0.4s linear, width 0.4s linear;
      opacity: .6;

    }

    &::after {
      background-image: url(${primitiveicon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 70px;
    }
  }

  button:focus {
    outline: none;

  }


  ${props => props.color}

`;





const StyledSplashPage = styled.div`
  postition: relative;
  box-sizing(border-box);

  .content{
    z-index: 10;
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0;
  }

`;
