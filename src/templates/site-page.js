import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import components from '../componentsMap'

const renderChild = (children) => {
  if (!children) {
    return null
  }
  if (typeof children === 'string') {
    return children
  }
  return React.createElement(components[children.id], children.props || {})
}

const renderProps = (props) => {
  if (!props) {
    return {}
  }
  const keys = Object.keys(props)
  keys.map((key) => {
    if (props[key] && props[key].id) {
      props[key] = components[props[key].id]
    }
  })
  return props
}

const SitePage = ({
  data: {
    markdownRemark: {
      frontmatter: { sections },
    },
  },
}) => (
  <Layout>
    <main>
      {sections.map(element => React.createElement(
        components[element.type],
        renderProps(element.props),
        renderChild(element.children),
      ))}
    </main>
  </Layout>
)

export default SitePage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        type
        sections {
          type
          children
          props {
            heroBody
            image {
              childImageSharp {
                fluid(maxWidth: 2880) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            greyBg
            videoUrl
            subtitle
            titleCenter
            bgImage
            body
            fullHeigh
            quote
            formId
            cards {
              body
              image
              title
            }
            cta {
              link
              text
              title
            }
          }
        }
      }
    }
  }
`
