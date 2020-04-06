import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Footer from './rocks/Footer.js';
import Header from './rocks/Header.js';
//import FOEButton from './rocks/FOEButton.js';

import settings from './settings';
import primitiveicon from './img/punkyicon.svg';

function SplashPage() {

  const color = settings.buttoncolor;
  const homebuttons = [
    { "id": "home1", "color": color.white, "checked": false, "label": "sknow.it" }
  ];
  const workbuttons = [
    { "id": "work2", "color": color.green, "checked": false, "label": "Primitive Digital" },
    { "id": "work3", "color": color.cyan, "checked": false, "label": "Primitive Hosting" }
  ];
  const playbuttons = [
    { "id": "play4", "color": color.orange, "checked": false, "label": "Nice2B.me" }
  ];


  const [mode, setMode] = useState('work');
  const [buttons, setButtons] = useState(homebuttons.concat(workbuttons).concat(playbuttons));

  const profilelist = ('work' === mode) ? settings.profiles.work : settings.profiles.play;

  useEffect(() => {
    //setButtons(workbuttons);
    console.log(buttons);
  }, [buttons]);

  const handleClick = (e) => {

    const btnID = e;
    const btnType = e.substring(0, 4);

    console.log('btnID= ' + btnID);

    //setDisplay(e.map(button => (button[id] === e ? {checked: true} : button)));
    /*
    let obj = buttons.find(t => t.id === e);
    if (obj) {
      obj.checked = !obj.checked;
      console.log(obj);
    }
    */

    const _buttons = buttons;
    _buttons.forEach((button) => {
      if (button.id === btnID) { button.checked = !button.checked; }
      else { button.checked = false; }
    });
    setButtons(_buttons);


    //setButtons(e => (buttons.id === e ? {checked: true} : {checked: false}));

    if ('play' === btnType) { setMode(btnType); }
    else { setMode('work'); }

    /*
    handleClick = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    };
    

        prevState => ({
      [name]: !prevState[name]
    }),

    */
    //setButtons(workbuttons);
  };

  
  return (
    <StyledSplashPage>

      <Header />

      <Container>

        <Row>
          {homebuttons && (
            homebuttons.map((button) => {
              const isActive = button.checked ? 'active' : '';
              return (
                <Col key={button.id}>
                  <FOEButton color={button.color}>
                    <button
                      onClick={({ target }) => handleClick(target.id)}
                      label={button.label}
                      className={isActive}
                      id={button.id}>
                    </button>
                    <div className="bg"></div>
                  </FOEButton>
                </Col>);
            })
          )}
        </Row>

        <Row>
          {workbuttons && (
            workbuttons.map((button) => {
              const isActive = button.checked ? 'active' : '';
              return (
                <Col key={button.id}>
                  <FOEButton color={button.color}>
                    <button
                      onClick={({ target }) => handleClick(target.id)}
                      label={button.label}
                      className={isActive}
                      id={button.id}>
                    </button>
                    <div className="bg"></div>
                  </FOEButton>
                </Col>);
            })
          )}
        </Row>

        <Row>
          {playbuttons && (
            playbuttons.map((button) => {
              const isActive = button.checked ? 'active' : '';
              return (
                <Col key={button.id}>
                  <FOEButton color={button.color}>
                    <button
                      onClick={({ target }) => handleClick(target.id)}
                      label={button.label}
                      className={isActive}
                      id={button.id}>
                    </button>
                    <div className="bg"></div>
                  </FOEButton>
                </Col>);
            })
          )}
        </Row>
      </Container>

      <Profiles>
        {profilelist && (
          profilelist.map((profile) => {
            return (
              <div
                key={profile.id}
                className="profile"
              >
                <i className={"fab " + profile.icon}></i>
                <p className="author">
                  <a href={profile.url} title={profile.title} rel="noopener noreferrer" target="_blank">{profile.label}</a>
                </p>
              </div>);
          })
        )}
      </Profiles>

      <Footer />

    </StyledSplashPage>
  );
}

export default SplashPage;


const StyledSplashPage = styled.div`
  postition: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;

  .content{
    z-index: 10;
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 0;
  }
`;

const Container = styled.div`
  position: relative;
  vertical-align: middle;
`;
const Row = styled.div`
  display: flex;
  width: 100%;

  justify-content: center;
  justify-items: center;
`;
const Col = styled.div`
  padding: 10px;
`;












const Profiles = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 4;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: .5rem;
    left: 1.5rem;
    z-index: 3;
  }

.profile {
  color: #a2a2a2;
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-shadow: #fff 1px 1px 0;
  
  .fab, .fas { margin-right: .5rem; }
  
  .author {
    a,
    a:link,
    a:visited {
      color: #a2a2a2;
      padding: 2px 3px;
      text-transform: uppercase;
      font-size: .9rem;
      letter-spacing: 2px;
      font-weight: 400;
      text-decoration: none;
      background-image: linear-gradient(120deg, #fc0 0%, #fc0 100%);
      background-position: 0 100%;
      background-repeat: no-repeat;
      background-size: 100% 0;
      border-bottom: 2px solid #fc0;
      transition: background-size .125s ease-in;
    }
    a:hover,
    a[href="https://primitivedigital.co.uk"],
    a[href="https://nice2b.me"] {
      color: #2d2d2d;
      background-size: 100% 100%;
    }
  }
}

`;





const FOEButton = styled.div`
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
    height: 135px;
    width: 135px;
    transition: height 0.4s linear, width 0.4s linear;

    &::before {
      height: 130vw;
      width: 130vw;
      transition: height 0.4s linear, width 0.4s linear;
      opacity: .6;

    }
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
  .bg:hover {
    height: 130vw;
    width: 130vw;
    transition: height 0.4s linear, width 0.4s linear;
  }


  ${props => props.color}

`;




