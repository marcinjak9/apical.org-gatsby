/* eslint-disable quotes */
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./Navigation"
import Footer from "./Footer"

import "../styles/index.css"

const Layout = ({ children }) => (
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
    render={data => (
      <div>
        <Helmet>
          <title>Apical - Crea la tua esperienza</title>
          <meta name="description" content="Happiness is a Movement" />
        </Helmet>
        <Navigation />
        {children}
        <Footer />
      </div>
    )}
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
