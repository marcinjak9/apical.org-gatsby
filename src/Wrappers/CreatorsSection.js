import React from 'react'
import { Link } from 'gatsby'
import SectionContainer from '../components/SectionContainer'
// import CREATORS from '../data/creators.yaml'
// import CreatorCardWithLightBox from './CreatorCardWithLightbox'
import { Row, Column } from '../components/Global'

const CreatorsSection = ({ title, textLeft, greyBg }) => (
  <SectionContainer
    title={title}
    className="no-padd-mobile"
    titleCenter={!textLeft}
    scrolling
    greyBg={greyBg}
  >
    <Row scrolling>
      {/* {CREATORS.creators
        && CREATORS.creators.slice(0, 3).map((creator, i) => (
          <Column size="4" slide key={i}>
            <CreatorCardWithLightBox
              image={creator.image}
              name={creator.name}
              body={creator.body}
              excerpt={creator.excerpt}
              tagline={creator.tagline}
              tag={creator.tag}
              url={creator.url}
              cta={{ text: 'More Festivals', url: creator.url }}
            />
          </Column>
        ))} */}
    </Row>
    <Row style={{ textAlign: 'center' }}>
      <Column size="12" textCenter>
        <Link to="/discover">
          <a>View all</a>
        </Link>
      </Column>
    </Row>
  </SectionContainer>
)

export default CreatorsSection
