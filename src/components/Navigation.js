import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Navigation } from 'apical-components'

const Wrapper = props => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
          frontmatter {
            logo
            mobileLogo
            sidebarLogo
            menuItems {
              text
              url
            }
            cta {
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
    render={({
      markdownRemark: {
        frontmatter: {
          logo,
          mobileLogo,
          menuItems,
          cta,
          contacts,
          sidebarLogo,
        },
      },
    }) => (
      <React.Fragment>
        <Navigation
          logo={logo}
          mobileLogo={mobileLogo}
          menuItems={menuItems}
          cta={cta}
          contacts={contacts}
          sidebarLogo={sidebarLogo}
        />
      </React.Fragment>
    )}
  />
)

export default Wrapper
