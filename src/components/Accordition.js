import React, { useState } from 'react';
import styled from '@emotion/styled';
import Emoji from './Emoji';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  a {
    text-decoration: underline;
  }
  span {
    margin-left: 0.5rem;
  }
  .body  {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const Accordition = ({ title, children }) => {
  const [show, setShow] = useState(false);
  const toggle = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <Wrapper>
      <a href="#" onClick={e => toggle(e)}>
        {title}
        <Emoji emoji="▾" />
      </a>
      <div className="body">{show && children}</div>
    </Wrapper>
  );
};

export default Accordition;
