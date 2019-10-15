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
      <meta property="og:image" content="https://apical.org/images/ecommerce-1.png" />
      <link
        rel="icon"
        type="image/png"
        href="https://apical.org/images/favicon.png"
        sizes="16x16"
      />
      <script type="text/javascript" src="https://apical.org/scripts/defer.js" />
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
