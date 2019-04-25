import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Dot = styled.span`
  /* width: 8px;
  height: 8px; */
  background-color: ${props => (props.active ? 'var(--text-grey)' : 'transparent')};
  color: ${props => (props.active ? 'var(--light)' : 'var(--text-grey)')};
  border: 1px solid var(--text-grey);
  border-radius: 50%;
  margin: 0.5rem;
  display: inline-block;
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 1.8;
`;

const Dots = ({ slides, onDotClick, active }) => (
  <Wrapper>
    {slides.map((slide, index) => (
      <a key={index} href="#" onClick={e => onDotClick(e, index)}>
        <Dot active={active === index}>{index + 1}</Dot>
      </a>
    ))}
  </Wrapper>
);

export default Dots;
