import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: ${props => `${props.width}px`};
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  /* background-image: url('https://placehold.it/800x400'); */
  flex-shrink: 0;
  overflow: hidden;
  scroll-snap-align: center;

  img {
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 767px) {
    img {
      max-width: 200px;
    }
  }
`

const Slide = ({ slide, width }) => <Wrapper width={width}>{slide}</Wrapper>

export default Slide
