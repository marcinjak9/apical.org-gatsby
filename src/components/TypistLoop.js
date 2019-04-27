import React from 'react'
import Typist from 'react-typist'
import styled from '@emotion/styled'

const StyledTypist = styled(Typist)`
  .Cursor {
    color: transparent !important;
  }
`

class RestartingTypist extends React.Component {
  state = {
    typistIndex: 0,
  }

  setTypistIndex = index => this.setState({ typistIndex: index })

  render() {
    const { words } = this.props
    const { typistIndex } = this.state
    return (
      <StyledTypist
        key={typistIndex}
        onTypingDone={() => this.setTypistIndex(typistIndex + 1)}
        cursor={{
          show: true,
        }}
        avgTypingDelay={30}
      >
        {words.map(word => [
          <span>{word}</span>,
          <Typist.Backspace count={word.length} delay={500} />,
        ])}
      </StyledTypist>
    )
  }
}

export default RestartingTypist
