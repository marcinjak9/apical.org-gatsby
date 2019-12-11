/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import Carousel from '../components/Carousel'
import { Row, Column } from '../components/Global'
import Image from '../components/image'
import Button from "../components/Button";

const PresentationRow = styled(Row)`
  margin: 0 auto;
  min-height: 420px;
  h3 {
    font-size: var(--font-headline);
    line-height: 2.6rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--font-subheader);
    padding-left: 0;
    margin-bottom: 2rem;
  }
  h4 {
    font-size: var(--font-subheader);
    color: var(--blue);
    text-align: center;
  }

  .body {
    padding-right: 4rem;
    p {
      padding-left: 0;
    }
  }

  img {
    width: 100%;
    /* padding: 1rem; */
  }

  @media (max-width: 767px) {
    h3 {
      font-size: var(--font-title);
    }
    p {
      font-size: var(--font-body);
      margin-bottom: 2rem;
    }

    .body {
      padding-right: 0;
      padding: 0 0.2rem;
    }

    img {
      padding: 2rem;
      padding-top: 2rem;
    }
  }
`

const Slide = ({ title, body, image, cta }) => (
  <PresentationRow>
    <Column size="6">
      <div className="body">
        <h3>{title}</h3>
        <p className="test">{body}</p>
        {cta.text && (<Button href={cta.link} outline icon="arrow">
            {cta.text}
        </Button>)}
      </div>
    </Column>
    <Column size="6" style={{ textAlign: 'center' }}>
      <Image src={image} alt="" resize="800" />
    </Column>
  </PresentationRow>
)

const Presentation = (props) => {
  const { slides } = props
  return (
    <SectionContainer {...props}>
      <Carousel
        slides={slides && slides.map((slide, i) => (
          <Slide
            key={i}
            title={slide.title}
            body={slide.body}
            image={slide.image}
            cta={slide.cta}
          />
        ))}
      />
    </SectionContainer>
  )
}

export default Presentation
