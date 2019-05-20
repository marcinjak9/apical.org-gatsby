import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import Menu from './Menu'

class Navigation extends React.Component {
  state = {
    isOpen: false,
  }

  onMenuClick = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <StaticQuery
        query={graphql`
          query MenuQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "menu" } }) {
              frontmatter {
                logo
                powered
                mobileLogo
                sidebarLogo
                it {
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
                en {
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
          }
        `}
        render={({ markdownRemark: { frontmatter } }) => {
          const lang = navigator.language.substring(0, 2)
            || navigator.userLanguage.substring(0, 2)
          const {
            sidebarLogo, mobileLogo, powered, logo,
          } = frontmatter
          return (
            <>
              <Sidebar
                open={isOpen}
                onClose={() => this.setState({ isOpen: false })}
                menuItems={frontmatter[lang].menuItems}
                logo={sidebarLogo}
                contacts={frontmatter[lang].contacts}
              />
              <Menu
                onMenuClick={this.onMenuClick}
                mobileLogo={mobileLogo}
                powered={powered}
                logo={logo}
                cta={frontmatter[lang].cta}
                menuItems={frontmatter[lang].menuItems}
              />
            </>
          )
        }}
      />
    )
  }
}

export default Navigation
