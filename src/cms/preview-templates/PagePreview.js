import React from 'react'
import PropTypes from 'prop-types'
import SitePage from '../../templates/site-page'
import StyleInjector from '../StyleInjector'

const PagePreview = ({ entry, widgetFor }) => {
  const data = {
    markdownRemark: {
      frontmatter: entry.getIn(['data']).toJS(),
    },
  }
  return (
    <StyleInjector>
      <SitePage data={data} />
    </StyleInjector>
  )
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview
