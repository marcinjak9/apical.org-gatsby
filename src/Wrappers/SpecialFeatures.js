import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import SimpleCard from '../components/SimpleCard'
import Button from '../components/Button'

const CustomRow = styled(Row)`
  .col:nth-child(4) {
    grid-column: 3 / span 4;
  }
`

const SpecialFeatures = (props) => {
  const { features, cta } = props
  return (
    <SectionContainer {...props}>
      <CustomRow scrolling>
        {features
          && features.map((f, i) => (
            <Column className="col" slide size="4">
              <SimpleCard
                image={f.image}
                title={f.title}
                body={f.body}
                small
                fullHeight
              />
            </Column>
          ))}
      </CustomRow>
      {cta && (
        <Row style={{ marginTop: '2rem' }}>
          <Column size="12" textCenter>
            {cta.title && <h3>{cta.title}</h3>}
            <Button href={cta.link} outline icon="arrow">
              {cta.text}
            </Button>
          </Column>
        </Row>
      )}
    </SectionContainer>
  )
}

export default SpecialFeatures
