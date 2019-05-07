import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import Button from '../components/Button'

const Text = styled.h4`
  color: var(--blue);
  font-weight: bold;
  text-align: center;
  font-size: var(--font-title);
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 767px) {
    font-size: var(--font-subheader);
  }
`

const Section = styled(SectionContainer)`
  min-height: 400px;
`

const Quote = ({ children, cta, greyBg }) => (
  <Section greyBg={greyBg}>
    <Row>
      <Column size="12">
        <Text>
          {children || (
            <>
              La prima esperienza è sempre gratuita, con qualsiasi piano.
              <br />
              Prova Apical senza impegno, sei il benvenuto
            </>
          )}
        </Text>
      </Column>
    </Row>
    {cta && (
      <Row>
        <Column size="12" textCenter>
          <Button href={cta.url || cta.link} primary>
            {cta.text}
          </Button>
        </Column>
      </Row>
    )}
  </Section>
)

export default Quote
