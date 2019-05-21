/* eslint-disable quotes */
import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Navigation from "./Navigation"
import Footer from "./Footer"

import "../styles/index.css"

const Layout = ({
  children, hideNav, hideFooter, meta,
}) => (
  <div>
    <Helmet>
      <title>
        {(meta && meta.pageTitle) || "Apical - Crea la tua esperienza"}
      </title>
      <meta
        name="description"
        content={(meta && meta.pageDescription) || "Happiness is a Movement"}
      />
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon.png"
        sizes="16x16"
      />
    </Helmet>
    {!hideNav && <Navigation />}
    {children}
    {!hideFooter && <Footer />}
  </div>
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
