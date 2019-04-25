import React, { useState } from 'react';
import Typist from 'react-typist';
import styled from '@emotion/styled';

const StyledTypist = styled(Typist)`
  .Cursor {
    color: transparent !important;
  }
`;

const RestartingTypist = ({ words }) => {
  const [typistIndex, setTypistIndex] = useState(0);
  return (
    <StyledTypist
      key={typistIndex}
      onTypingDone={() => setTypistIndex(typistIndex + 1)}
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
  );
};

export default RestartingTypist;
