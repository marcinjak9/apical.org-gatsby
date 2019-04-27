import React from 'react'
import styled from '@emotion/styled'
import Emoji from './Emoji'

const Wrapper = styled.div`
  margin-bottom: 1rem;
  a {
    text-decoration: underline;
  }
  span {
    margin-left: 0.5rem;
  }
  .body {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`
class Accordition extends React.Component {
  state = {
    show: false,
  }

  toggle = (e) => {
    e.preventDefault()
    this.setState(ps => ({ show: !ps.show }))
  }

  render() {
    const { title, children } = this.props
    const { show } = this.state
    return (
      <Wrapper>
        <a href="#" onClick={e => this.toggle(e)}>
          {title}
          <Emoji emoji="▾" />
        </a>
        <div className="body">{show && children}</div>
      </Wrapper>
    )
  }
}

export default Accordition
