/* eslint-disable quotes */
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./Navigation"
import Footer from "./Footer"

import "../styles/index.css"

const Layout = ({ children, hideNav, hideFooter }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <div>
        <Helmet>
          <title>Apical - Crea la tua esperienza</title>
          <meta name="description" content="Happiness is a Movement" />
        </Helmet>
        {!hideNav && <Navigation />}
        {children}
        {!hideFooter && <Footer />}
      </div>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
