import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'

const Section = styled(SectionContainer)`
  min-height: initial;

  h3.title {
    margin-bottom: 3rem;
  }

  h4 {
    font-size: var(--font-title);
  }

  p {
    font-size: var(--font-body);
  }
`

const WelcomeSteps = (props) => {
  const { columns } = props
  return (
    <Section {...props}>
      <Row>
        {columns.map((c, i) => (
          <Column key={i} size="4">
            <h4>{c.title}</h4>
            <p>{c.body}</p>
          </Column>
        ))}
      </Row>
    </Section>
  )
}

export default WelcomeSteps
