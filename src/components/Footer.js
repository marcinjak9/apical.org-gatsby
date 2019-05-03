import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Footer } from 'apical-components'

const FooterWrapper = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-menu" } }) {
          frontmatter {
            logo
            mobileLogo
            menuItems {
              text
              url
            }
            socialItems {
              text
              url
            }
            contacts {
              email
              phone
            }
          }
        }
      }
    `}
    render={({ markdownRemark: { frontmatter } }) => (
      <Footer {...frontmatter} />
    )}
  />
)

export default FooterWrapper
