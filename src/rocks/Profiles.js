import React from 'react';
import styled from '@emotion/styled'

const Profiles = ({ props }) => {
  return (
    <StyledProfiles>
      {props && (
        props.map((profile) => {
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
    </StyledProfiles>
  );
}

export default Profiles;

const StyledProfiles = styled.div`
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