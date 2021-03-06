import React from 'react'
import styled from '@emotion/styled'
import Markdown from 'react-markdown/with-html'
import Button from '../components/Button'
import { Container, Row, Column } from '../components/Global'
import Emoji from '../components/Emoji'
import TypistLoop from '../components/TypistLoop'
import { rawImageLink } from '../components/image'

const Wrapper = styled.div`
  width: 100%;
  min-height: 720px;
  background-color: var(--lightgrey);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${props => rawImageLink(props.image, { resize: '2000' })});
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    z-index: 2;
  }

  @media (max-width: 767px) {
    min-height: 500px;
  }
`

const HeroColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5rem;

  padding-left: 2.3rem;
  padding-right: 2.3rem;

  h1 {
    font-size: 3.7rem;
    color: var(--light);
    line-height: 3.6rem;
    font-weight: normal;
  }

  p {
    font-size: var(--font-subheader);
    line-height: 1.4rem;
    color: var(--light);
    font-weight: ${props => (props.bodyLight ? 'normal' : 'bold')};
  }

  p:last-child {
    margin-bottom: 3.1rem;
  }
  @media (max-width: 767px) {
    h1 {
      font-size: var(--font-title);
      line-height: var(--font-title);
    }
  }
`

const renderCta = (cta) => {
  if (cta && cta.text && cta.link) {
    return (
      <Button
        primary
        href={cta.link}
        icon="arrow"
        alignStart
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        {cta.text}
      </Button>
    )
  }
  return null
}
const renderSecondaryCta = (cta) => {
  if (cta && cta.text && cta.link) {
    return (
      <Button
        primary
        light
        href={cta.link}
        icon="arrow"
        alignStart
        style={{ marginLeft: 10, marginTop: 10 }}
      >
        {cta.text}
      </Button>
    )
  }
  return null
}

const HomeHero = ({
  image,
  title,
  heroBody,
  cta,
  colRight,
  bodyLight,
  typings,
  secondaryCta,
}) => (
  <Wrapper image={image}>
    <Container style={{ zIndex: 2 }}>
      <Row>
        <HeroColumn size="10" bodyLight={bodyLight}>
          <h1>
            {/* {title} */}
            <Markdown
              source={title}
              escapeHtml={false}
              // disallowedTypes={['paragraph']}
              renderers={{ paragraph: 'span' }}
            />
            {typings && typings.length > 0 && !!typings[0] && (
              <TypistLoop words={typings} />
            )}
          </h1>
          {/* <p>{heroBody}</p> */}
          <Markdown source={heroBody} escapeHtml={false} />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {renderCta(cta)}
            {renderSecondaryCta(secondaryCta)}
          </div>
        </HeroColumn>
        {colRight && (
          <Column
            size="6"
            className="d-flex justify-content-center align-items-center"
          >
            <span className="emoji" role="img">
              <Emoji emoji={colRight} size={5} />
            </span>
          </Column>
        )}
      </Row>
    </Container>
  </Wrapper>
)

export default HomeHero
