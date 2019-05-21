import React, { Component } from 'react'
import styled from '@emotion/styled'
import { language, switchLanguage } from '../../../LanguageProvider'

const ArrowDown = styled.div`
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;

  border-top: 10px solid var(--darkblue);
  display: inline-block;
`

export default class LanguageSelection extends Component {
  constructor(props) {
    super(props)
    const lang = language()
    this.state = {
      selected: lang,
    }
  }

  renderLang = () => {
    const { selected } = this.state
    if (selected === 'en') {
      return 'IT'
    }
    return 'EN'
  }

  setLanguage = (e) => {
    const { selected } = this.state
    e.preventDefault()
    if (selected === 'en') {
      switchLanguage('it')
    } else {
      switchLanguage('en')
    }
    return location.reload()
  }

  render() {
    return (
      <a href="#" onClick={this.setLanguage}>
        {this.renderLang()}
      </a>
    )
  }
}
