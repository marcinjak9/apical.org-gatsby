import React from 'react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'

class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  componentDidMount() {
    this.inject()
  }

  inject = () => {
    const iframe = document.querySelector('iframe[class*="PreviewPaneFrame"]')
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }

  renderCache = () => {
    const { iframeRef } = this.state
    const { children } = this.props
    const myCache = createCache({
      key: 'my-prefix-key',
      container: iframeRef,
    })
    return <CacheProvider value={myCache}>{children}</CacheProvider>
  }

  render() {
    const { iframeRef } = this.state
    return <>{iframeRef && this.renderCache()}</>
  }
}

export default CSSInjector
