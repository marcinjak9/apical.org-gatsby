import React from 'react'
import GhostContentAPI from '@tryghost/content-api'
import moment from 'moment'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import BlogCard from '../components/BlogCard'
import SectionContainer from '../components/SectionContainer'
import Button from '../components/Button'
import { Row, Column } from '../components/Global'

const BlogRow = styled(Row)`
  padding-bottom: 2rem;
`

class BlogSection extends React.Component {
  constructor(props) {
    super(props)
    this.api = new GhostContentAPI({
      url: 'https://journal.apical.org',
      key: process.env.GHOST_KEY,
      version: 'v2',
    })
    this.state = {
      posts: [],
    }
  }

  componentDidMount = () => {
    this.api.posts
      .browse({ limit: 3, include: 'tags,authors' })
      .then(posts => this.setState({ posts }))
      .catch(e => console.log(e))
  }

  render() {
    const { greyBg } = this.props
    const { posts } = this.state
    return (
      <SectionContainer
        title="Blog"
        scrolling
        className="blog-section no-padd-mobile"
        greyBg={greyBg}
        titleCenter
      >
        <BlogRow scrolling>
          {posts.map(post => (
            <Column size="4" key={post.id} slide>
              <BlogCard
                image={post.feature_image}
                name={post.title}
                body={`${post.excerpt
                  .split(' ')
                  .slice(0, 20)
                  .join(' ')}...`}
                tag={post.primary_tag && post.primary_tag.name}
                date={moment(post.published_at).format('DD MMM YYYY')}
                author={post.primary_author && post.primary_author.name}
                url={post.url}
              />
            </Column>
          ))}
        </BlogRow>
        <Row>
          <Column size="12" textCenter>
            {/* <Link to="https://journal.apical.org">
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: 'bold' }}
              >
                Vai al blog
              </a>
            </Link> */}
            <Button href="features" icon="arrow" primary>
              Scopri la piattaforma
            </Button>
          </Column>
        </Row>
      </SectionContainer>
    )
  }
}

export default BlogSection
