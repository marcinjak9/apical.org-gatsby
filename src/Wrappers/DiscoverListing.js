import React from 'react'
import { Link } from 'gatsby'
import FilterTab from './FilterTab'

import CREATORS from '../data/creators.yaml'
import CreatorCardWithLightBox from './CreatorCardWithLightbox'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'

const DiscoverListing = () => (
  <SectionContainer>
    {/* <FilterTab /> */}
    <Row>
      {CREATORS.creators
        && CREATORS.creators.map((c, i) => (
          <Column size="4">
            <CreatorCardWithLightBox
              image={c.image}
              name={c.name}
              body={c.body}
              excerpt={c.excerpt}
              tagline={c.tagline}
              tag={c.tag}
              url={c.url}
              cta={{ text: 'More Festivals', url: c.url }}
            />
          </Column>
        ))}
    </Row>
    <Row style={{ textAlign: 'center' }}>
      <Column size="12" textCenter>
        <Link to="/">
          <a>View all</a>
        </Link>
      </Column>
    </Row>
  </SectionContainer>
)

export default DiscoverListing
