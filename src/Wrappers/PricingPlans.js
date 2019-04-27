import React from 'react'
import { css } from '@emotion/core'
import SectionContainer from '../components/SectionContainer'
import PricingCard from '../components/PricingCard'
import Button from '../components/Button'
import { Row, Column } from '../components/Global'

const PricingPlans = ({ greyBg }) => (
  <SectionContainer
    title="Your Plan"
    className="pricing-plans"
    greyBg={greyBg}
    titleCenter
  >
    <Row>
      <Column size="4" offset="3">
        <PricingCard
          title="Self Service"
          body="Technology + basic training"
          plan="2,5 - 4%"
          emoji="😉"
        />
      </Column>
      <Column size="4">
        <PricingCard
          title="Assisted"
          body="Technology + fulltraining + legal"
          plan="10%"
          active
          emoji="😎"
        />
      </Column>
    </Row>
    <Row
      className={css`
        text-align: center;
      `}
    >
      <Column size="12" style={{ textAlign: 'center' }}>
        <Button href="/sign-up" icon="arrow" outline>
          Sign up now
        </Button>
      </Column>
    </Row>
  </SectionContainer>
)

export default PricingPlans
