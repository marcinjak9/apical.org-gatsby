import React from 'react'
import { graphql } from 'gatsby'
import ScrollableAnchor from 'react-scrollable-anchor'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBuondary'
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

const withErrorBoundary = element => React.createElement(ErrorBoundary, {}, element)

const renderElements = (sections, preview) => {
  if (sections) {
    return sections.map((element, index) => {
      if (components[element.type]) {
        if (element.type === 'FormSection') {
          return withErrorBoundary(
            React.createElement(
              'div',
              { id: 'onboarding' },
              React.createElement(
                components[element.type],
                { ...renderProps(element.props), key: index, preview },
                renderChild(element.children),
              ),
            ),
          )
        }
        return withErrorBoundary(
          React.createElement(
            components[element.type],
            { ...renderProps(element.props), key: index, preview },
            renderChild(element.children),
          ),
        )
      }
      return null
    })
  }
  return null
}

const SitePage = ({
  preview,
  data: {
    markdownRemark: {
      frontmatter: {
        sections, hideNav, hideFooter, meta,
      },
    },
  },
}) => {
  if (preview) {
    return (
      // <Layout preview={preview}>
      <main>{renderElements(sections, preview)}</main>
      // </Layout>
    )
  }
  return (
    <Layout
      preview={preview}
      hideFooter={hideFooter}
      hideNav={hideNav}
      meta={meta}
    >
      <main>{renderElements(sections, preview)}</main>
    </Layout>
  )
}

export default SitePage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        templateKey
        type
        hideNav
        hideFooter
        meta {
          pageTitle
          pageDescription
        }
        sections {
          type
          children
          props {
            heroBody
            typings
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
            central
            smallText
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
            features {
              title
              body
              image
              items {
                icon
                title
                body
                pro
              }
            }
            columns {
              emoji
              body
              title
            }
            cta {
              link
              text
              title
            }
            items {
              title
              nav
              body
            }
            Members {
              body
              image
              name
              role
            }
            testimonials {
              body
              company
              image
              name
            }
            creators {
              body
              excerpt
              image
              name
              tag
              tagline
              url
            }
            tabs {
              commission
              description
              mobileTitle
              monthly
              setupFee
              title
              features {
                active
                text
              }
            }
          }
        }
      }
    }
  }
`
