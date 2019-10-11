import React from 'react'
import styled from '@emotion/styled'
import Button from '../components/Button'
import { Row, Column } from '../components/Global'
import SimpleCard from '../components/SimpleCard'
import SectionContainer from '../components/SectionContainer'

const HowItWorksWrapper = styled(SectionContainer)`
  h3.subtitle {
    margin-bottom: 3rem;
  }
`
const Card = styled(SimpleCard)`
  height: 100%;
`

const CustomRow = styled(Row)`
  margin-bottom: 2rem;
`

const HowItWorks = (props) => {
  const { cards, cta } = props
  return (
    <HowItWorksWrapper {...props}>
      {/* <TablerCards items={FEATURES} /> */}
      <CustomRow>
        {cards.map((feature, i) => (
          <Column key={i} size={cards.length === 2 || cards.length === 4 ? 6 : 4}>
            <Card
              // bodySmall
              index={i}
              titleSize={2}
              title={feature.title}
              body={feature.body}
              image={feature.image}
            />
          </Column>
        ))}
      </CustomRow>
      {cta && (
        <Row>
          <Column size="12" textCenter>
            <Button href={cta.link} outline icon="arrow">
              {cta.text}
            </Button>
          </Column>
        </Row>
      )}
    </HowItWorksWrapper>
  )
}

export default HowItWorks
