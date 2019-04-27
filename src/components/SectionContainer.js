import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Container } from './Global'

const dynamicStyles = (props) => {
  if (props.removeHorizontalPadding) {
    return css`
      padding-left: 0;
      padding-right: 0;
    `
  }
  return css``
}

const Section = styled.section`
  padding: ${props => (props.padded ? 'padding: 8rem 1rem;' : '4rem 1rem')};
  background-color: ${props => (props.greyBg ? 'var(--grey-bg)' : 'var(--light)')};
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${dynamicStyles}

  h3.title {
    font-size: ${props => (props.titleSize ? `${props.titleSize}rem` : 'var(--font-title)')};
    margin-bottom: ${props => (props.subtitle ? '0.5rem' : '2rem')};
    font-weight: bold;
    white-space: pre-wrap;
    width: 100%;
    text-align: ${props => (props.titleCenter ? 'center' : 'left')};
  }

  h4.subtitle {
    color: var(--text-grey);
    font-size: var(--font-subheader);
    font-weight: normal;
    white-space: pre-wrap;
    width: 100%;
    text-align: ${props => (props.titleCenter ? 'center' : 'left')};
    margin-bottom: 2rem;
  }
  /* p {
    font-size: var(--font-subheader);
    padding-left: ${props => (props.resetParagraph ? '0' : '1rem')};
    font-size: ${props => (props.resetParagraph ? '1rem' : '1.3rem')};
  } */

  @media (max-width: 1023px) {
  }
`

const SectionContainer = (props) => {
  const {
    children,
    title,
    subtitle,
    // titleCenter,
    // removeHorizontalPadding,
    // greyBg,
    // padded,
    // resetParagraph,
  } = props
  return (
    <Section {...props}>
      <Container>
        {title && <h3 className="title">{title}</h3>}
        {subtitle && <h4 className="subtitle">{subtitle}</h4>}
        {children}
      </Container>
    </Section>
  )
}

export default SectionContainer
