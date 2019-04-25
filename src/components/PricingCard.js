import React from 'react';
import styled from '@emotion/styled';
import Emoji from './Emoji';

const Card = styled.div`
  border: 1px solid #b2b2b2;
  border-radius: 4px;
  margin-bottom: 2rem;

  color: ${props => (props.active ? 'var(--darkblue)' : 'color: var(--text-grey)')};

  border-color: ${props => (props.active ? 'var(--darkblue)' : '')};
  text-align: center;

  h3 {
    font-size: var(--font-headline);
  }

  p {
    font-size: var(--font-body);
  }

  small {
    font-size: var(--font-body-secondary);
    display: inline-block;
    margin-bottom: 1rem;
  }

  .body {
    padding: 2.5rem 2.5rem 0 2.5rem;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  footer {
    height: 60px;
    font-size: var(--font-subheader);
    color: var(--light);
    background-color: ${props => (props.active ? 'var(--darkblue)' : 'var(--text-grey)')};
    width: 100%;
    border-radius: 0 0 4px 4px;
    line-height: 4rem;
  }
`;

const PricingCard = ({
  title, body, plan, active, emoji,
}) => (
  <Card active={active}>
    <div className="body">
      {emoji && <Emoji emoji={emoji} size={2} />}
      <h3>{title}</h3>
      <p>{body}</p>
      <small>Our Commission</small>
    </div>
    <footer>{plan}</footer>
  </Card>
);

export default PricingCard;
