import React from 'react'
import GhostContentAPI from '@tryghost/content-api'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import FaqItem from '../components/FaqItem'

class FaqSection extends React.Component {
  constructor(props) {
    super(props)
    this.api = new GhostContentAPI({
      url: 'https://journal.apical.org',
      key: process.env.GATSBY_GHOST_KEY,
      version: 'v2',
    })
    this.state = {
      posts: [],
    }
  }

  componentDidMount = () => {
    this.api.pages
      .browse({ limit: 3, filter: 'tags:[faq]' })
      .then(posts => this.setState({ posts }))
      .catch(e => console.log(e))
  }

  render() {
    const { posts } = this.state
    return (
      <SectionContainer greyBg title="FAQ" titleSize={1.7} titleCenter>
        <Row>
          {posts.map(post => (
            <Column key={post.id} size="6">
              <FaqItem title={post.title} body={post.excerpt} url={post.url} />
            </Column>
          ))}
        </Row>
      </SectionContainer>
    )
  }
}

export default FaqSection
