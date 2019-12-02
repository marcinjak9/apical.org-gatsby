import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import SimpleCard from '../components/SimpleCard'
import Button from '../components/Button'

const CustomRow = styled(Row)`
   .special-section .col[data-items-count="8"]:nth-child(4) {
      grid-column: 3 / span 4 !important;
   }

   .special-section .col[data-items-count="7"]:nth-child(7) {
      grid-column: 5 / span 4 !important;
   }

   .special-section .col[data-items-count="5"]:nth-child(4) {
       grid-column: 3 / span 4 !important;
   }
   
   .special-section .col[data-items-count="4"] {
       grid-column: span 6 / auto !important;
   }
`

const SpecialFeatures = (props) => {
  const { features, cta } = props
  return (
    <SectionContainer {...props} className="special-section">
      <CustomRow scrolling>
        {features
          && features.map((f, i) => (
            <Column key={i} className="col" slide size="4" data-items-count={features.length}>
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
