import React from 'react';
import styled from '@emotion/styled';

const EmojiWrapper = styled.span`
  font-size: ${props => `${props.size}rem` || '2rem'};
`;

const Emoji = ({
  emoji, alt, size, style,
}) => (
  <EmojiWrapper
    style={style}
    size={size}
    role="img"
    aria-label={alt || 'emoji'}
  >
    {emoji}
  </EmojiWrapper>
);

export default Emoji;
