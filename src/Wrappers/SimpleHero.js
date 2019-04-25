import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';

import Emoji from '../components/Emoji';
import { Row, Container, Column } from '../components/Global';

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  background-position: center center;
  background-size: cover;
  position: relative;
  background-image: url(${props => props.image});

  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .hero-body {
    padding-top: 9rem;
    padding-bottom: 9rem;
    color: var(--light);

    h1 {
      font-size: var(--font-headline);
      color: var(--light);
    }

    &.slim {
      padding-top: 5rem;
      padding-bottom: 5rem;
      h1 {
        font-size: var(--font-title);
      }
    }
  }

  .hero-tag {
    margin-bottom: 1rem;
    display: block;
    font-weight: bold;
  }
`;

const Body = styled(Row)`
  padding-top: ${props => (props.smallText ? '6rem' : '9rem')};
  padding-bottom: ${props => (props.smallText ? '6rem' : '9rem')};
  color: var(--light);

  h1 {
    font-size: ${props => (props.smallText ? '1.8' : '2.6rem')};

    color: var(--light);
  }

  @media (max-width: 767px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const SimpleHero = ({
  image,
  title,
  central,
  smallText,
  body,
  emoji,
  tag,
  emojiSize,
}) => (
  <Wrapper image={image}>
    {title && (
      <Container style={{ zIndex: 2 }}>
        <Body smallText={smallText}>
          <Column
            size="6"
            offset={central ? 4 : 1}
            style={{ textAlign: central ? 'center' : '', position: 'relative' }}
          >
            {emoji && (
              <Emoji
                emoji={emoji}
                size={emojiSize || 3}
                style={{
                  // marginBottom: '2rem',
                  // display: 'block',
                  position: 'absolute',
                  top: '-70px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {emoji}
              </Emoji>
            )}
            {tag && <span className="hero-tag">{tag}</span>}
            <h1>{title}</h1>
            {body && <p>{body}</p>}
          </Column>
        </Body>
      </Container>
    )}
  </Wrapper>
);

export default SimpleHero;
