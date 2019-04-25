import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Emoji from './Emoji';

const dynamicStyle = (props) => {
  let s = css``;
  if (props.small) {
    s = css`
      ${s}
      padding: 2.8rem 1.8rem;
      margin-bottom: 0.1rem;

      h3 {
        font-size: var(--font-title);
        text-align: center;
        margin-top: 0;
      }

      p {
        text-align: ${props.textCenter ? 'center' : 'left'};
        line-height: 1.6rem;
      }
    `;
  }
  if (props.sliding) {
    s = css`
      ${s}
      position: ${props.active ? 'relative' : 'absolute'};
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: ${props.active ? 30 : 2};
      transition: all .3s;
      opacity: ${props.active ? 1 : 0.5};
      margin: 0 auto;

      p {
        font-size: var(--font-body);
      }
      .features {
        margin-top: 2.5rem;
        color: var(--text-grey);
        .title {
          margin-bottom: 1rem;
        }
        p {
          font-size: var(--font-body);
          line-height: 2rem;
        }
      }
    `;
  }
  return s;
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: word-wrap;
  background-color: #fff;
  background-clip: border-box;
  padding: 3rem;
  padding-bottom: 4rem;
  text-align: center;
  position: relative;
  border: none;
  /* box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 4px 5px 15px;
  border-radius: 4px;
  /* margin-top: 1rem; */
  height: ${props => (props.fullHeight ? '100%' : 'inherit')};

  h3 {
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: ${props => (props.titleSize ? `${props.titleSize}rem` : 'var(--font-headline)')};
    color: var(--blue);
    line-height: 2rem;
  }

  .body {
    margin: 0;
    padding: 0;
    font-size: ${props => (props.bodySmall ? 'var(--font-body)' : 'var(--font-subheader)')};
    color: var(--text-grey);
  }

  ${dynamicStyle}
`;

const getPosition = (length, index, currentIndex) => index - currentIndex;

const SimpleCard = (props) => {
  const {
    index,
    title,
    body,
    image,
    small,
    badge,
    features,
    active,
    length,
    currentIndex,
  } = props;
  return (
    <Card
      // className={classNames('card features-card', { 'card-small': small })}
      {...props}
      style={{
        transform: `translate(${getPosition(length, index, currentIndex)
          * 300}px)
        scale(${active ? '1' : '0.9'})`,
        zIndex:
          currentIndex === index ? 100 : 90 + currentIndex * index - index,
      }}
    >
      {image && <Emoji emoji={image} size={3} />}
      <h3>{title}</h3>
      <p className="body">{body}</p>
      {badge && badge}
      {features && (
        <div className="features">
          <p className="title">In place of</p>
          {features.map(f => (
            <p>{f.text}</p>
          ))}
        </div>
      )}
    </Card>
  );
};

export default SimpleCard;
