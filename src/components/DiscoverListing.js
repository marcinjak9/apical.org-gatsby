import React from 'react'
import PropTypes from 'prop-types'
import { CreatorCardWithLightBox, SectionContainer, Row, Column } from 'apical-components'

const DiscoverListing = (props) => {
  const { creators } = props
  return (
    <SectionContainer {...props}>
      {/* <FilterTab /> */}
      <Row>
        {creators && creators.length > 0 &&
          creators.map((c, i) => (
            <Column size="4">
              <CreatorCardWithLightBox
                image={c.image}
                name={c.name}
                body={c.body}
                excerpt={c.excerpt}
                tagline={c.tagline}
                tag={c.tag}
                url={c.url}
              />
            </Column>
          ))}
      </Row>
      {/* <Row style={{ textAlign: 'center' }}>
        <Column size='12' textCenter>
          <Link to='/'>
            <a>View all</a>
          </Link>
        </Column>
      </Row> */}
    </SectionContainer>
  )
}

DiscoverListing.propTypes = {
  creators: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      body: PropTypes.string,
      excerpt: PropTypes.string,
      tagline: PropTypes.string,
      tag: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
}

export default DiscoverListing
