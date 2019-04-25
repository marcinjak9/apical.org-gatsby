import React from 'react';
import styled from '@emotion/styled';

const WelcomeItem = styled.div`
  text-align: center;
  margin-top: 6rem;
  img {
    max-width: 150px;
    margin: 0 auto;
  }

  h3 {
    margin-top: 4rem;
    font-size: var(--font-subheader);
    text-align: center;
  }

  p {
    margin-top: 1.5rem;
    font-size: var(--body);
    color: var(--text-grey);
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const WelcomeSlide = ({ image, title, body }) => (
  <WelcomeItem>
    <img src={image} alt="" />
    <h3>{title}</h3>
    <p>{body}</p>
  </WelcomeItem>
);

export default WelcomeSlide;
