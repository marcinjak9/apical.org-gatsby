import React from 'react'
import styled from '@emotion/styled'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import PricingColumn from '../components/PricingColumn'
import Button from '../components/Button'

const Wrapper = styled(SectionContainer)`
  @media (max-width: 767px) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`

const MobileColumn = styled(Column)`
  display: none;
  border-bottom: 1px solid var(--lightgrey);
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const Link = styled.a`
  color: ${props => (props.active ? 'var(--blue)' : 'var(--text-grey)')} !important;
  font-weight: bold;
  text-decoration: none;

  .mobile {
    display: none;
  }

  @media (max-width: 767px) {
    span {
      display: none;
    }
    span.mobile {
      display: inline;
    }
  }
`

class PricingSection extends React.Component {
  state = {
    selectedIndex: 0,
  }

  changePlan = (e, index) => {
    e.preventDefault()
    this.setState({ selectedIndex: index })
  }

  render() {
    const { tabs, cta } = this.props
    const { selectedIndex } = this.state
    return (
      <Wrapper {...this.props}>
        <Row gap="0" textCenter>
          <MobileColumn>
            {tabs.map((plan, i) => (
              <Link
                active={selectedIndex === i}
                href="#"
                onClick={e => this.changePlan(e, i)}
              >
                <span>{plan.title}</span>
                <span className="mobile">{plan.mobileTitle}</span>
              </Link>
            ))}
          </MobileColumn>
          {tabs.map((plan, i) => (
            <PricingColumn
              key={i}
              title={plan.title}
              mobileTitle={plan.mobileTitle}
              description={plan.description}
              commission={plan.commission}
              setupFee={plan.setupFee}
              monthly={plan.monthly}
              features={plan.features}
              selected={selectedIndex === i}
              index={i}
            />
          ))}
        </Row>
        {cta && (
          <Row>
            <Column size="12" textCenter style={{ marginTop: '2rem' }}>
              <Button href={cta.link} primary icon="arrow">
                {cta.text}
              </Button>
            </Column>
          </Row>
        )}
      </Wrapper>
    )
  }
}

export default PricingSection
