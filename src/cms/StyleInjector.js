import React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider, jsx, css } from '@emotion/core'

// Component used to Enable netlify CMS to apply the styles added through styled-components
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  componentDidMount() {
    const iframe = document.querySelector('iframe[class*="PreviewPaneFrame"]')
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  renderCache = () => {
    const myCache = createCache({
      key: 'my-prefix-key',
      container: this.state.iframeRef,
    })
    return <CacheProvider value={myCache}>{this.props.children}</CacheProvider>
  }

  render() {
    return <>{this.state.iframeRef && this.renderCache()}</>
  }
}

export default CSSInjector
