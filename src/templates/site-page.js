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

const renderElements = (sections) => {
  if (sections) {
    return sections.map((element) => {
      if (components[element.type]) {
        return React.createElement(
          components[element.type],
          renderProps(element.props),
          renderChild(element.children),
        )
      }
      return null
    })
  }
  return null
}

const SitePage = ({
  data: {
    markdownRemark: {
      frontmatter: { sections },
    },
  },
}) => (
  <Layout>
    <main>{renderElements(sections)}</main>
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
            image
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
            slides {
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
