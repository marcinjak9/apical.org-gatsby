import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import Menu from './Menu'
import { language } from '../../LanguageProvider'

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
                  menuItemsLeft {
                    text
                    url
                  }
                  menuItemsRight {
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
                  menuItemsLeft {
                    text
                    url
                  }
                  menuItemsRight {
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
          const lang = language()
          const {
            sidebarLogo, mobileLogo, powered, logo,
          } = frontmatter
          return (
            <>
              <Sidebar
                open={isOpen}
                onClose={() => this.setState({ isOpen: false })}
                menuItemsLeft={frontmatter[lang].menuItemsLeft}
                menuItemsRight={frontmatter[lang].menuItemsRight}
                logo={sidebarLogo}
                contacts={frontmatter[lang].contacts}
              />
              <Menu
                onMenuClick={this.onMenuClick}
                mobileLogo={mobileLogo}
                powered={powered}
                logo={logo}
                cta={frontmatter[lang].cta}
                menuItemsLeft={frontmatter[lang].menuItemsLeft}
                menuItemsRight={frontmatter[lang].menuItemsRight}
              />
            </>
          )
        }}
      />
    )
  }
}

export default Navigation
