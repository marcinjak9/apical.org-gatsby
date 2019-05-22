import React, { Component } from 'react'
import styled from '@emotion/styled'
import { language, switchLanguage } from '../../../LanguageProvider'

const Select = styled.a`
  font-weight: bold;
  margin-left: 10px;
  padding: 8px;
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
      <Select href="#" onClick={this.setLanguage}>
        {this.renderLang()}
      </Select>
    )
  }
}
