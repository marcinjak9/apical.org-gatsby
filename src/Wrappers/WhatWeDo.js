import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'

const Body = styled.p`
  font-size: var(--font-title);

  @media (max-width: 767px) {
    font-size: var(--font-subheader);
  }
`

const Section = styled(SectionContainer)`
  justify-content: flex-start;
  min-height: 400px;

  a {
    margin-top: 2rem;
    font-size: var(--font-title);
    display: inline-block;
  }
  /* background-image: url('/static/images/mockup.png');
  background-repeat: no-repeat;
  background-size: 515px;
  background-position: 34% 141%;

  @media (max-width: 576px) {
    padding-bottom: 16rem;
    background-position: 0 500px;
    background-size: contain;
  }
  @media (min-width: 576px) {
    padding-bottom: 16rem;
    background-position: 0 294px;
    background-size: contain;
  }

  @media (min-width: 768px) {
    padding-bottom: 4rem;
    background-position: 7% 113%;
    background-size: 390px;
  }

  @media (min-width: 992px) {
    background-position: 7% 136%;
    background-size: 440px;
  }

  @media (min-width: 1200px) {
    background-size: 500px;
    background-position: 14% 226%;
  }
  @media (min-width: 1440px) {
    background-size: 515px;
    background-position: 20% 141%;
  }
  @media (min-width: 1920px) {
    background-size: 515px;
    background-position: 33% 200%;
  } */
`

const Title = styled.h3`
  font-size: var(--font-title);
`

const WhatWeDo = ({
  title, body, greyBg, cta,
}) => (
  <Section greyBg={greyBg}>
    <Row>
      <Column size="5">
        <Title>{title}</Title>
      </Column>
      <Column size="7">
        <Body>{body}</Body>
        {cta && (
          <Link to={cta.url || cta.link} className="underline">
            {cta.text}
          </Link>
        )}
      </Column>
    </Row>
  </Section>
)

export default WhatWeDo
