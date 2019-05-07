import React from 'react'
import PropTypes from 'prop-types'
import SitePage from '../../templates/site-page'
import StyleInjector from '../StyleInjector'

const PagePreview = ({ entry }) => {
  const data = {
    markdownRemark: {
      frontmatter: entry.getIn(['data']).toJS(),
    },
  }
  return (
    <StyleInjector>
      <SitePage data={data} preview />
    </StyleInjector>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default PagePreview
