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
                mobileLogo
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
              logo, mobileLogo, menuItems, cta, contacts,
            },
          },
        }) => (
          <>
            <Sidebar
              open={isOpen}
              onClose={() => this.setState({ isOpen: false })}
              menuItems={menuItems}
              logo={mobileLogo}
              contacts={contacts}
            />
            <Menu
              onMenuClick={this.onMenuClick}
              mobileLogo={mobileLogo}
              logo={logo}
              cta={cta}
              menuItems={menuItems}
            />
          </>
        )}
      />
    )
  }
}

export default Navigation
