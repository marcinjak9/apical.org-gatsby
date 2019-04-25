import React from 'react';
import styled from '@emotion/styled';
import { Row, Column } from './Global';

const Card = styled.div`
  padding: 1.5rem;
  border-left: 1px solid var(--lightgrey);
  margin-bottom: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .team-title {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    font-size: var(--font-title);
    font-weight: bold;
    margin-bottom: 0;
  }

  small {
    color: var(--text-grey);
  }

  img {
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  p {
    padding-left: 0;
    font-size: var(--font-body);
  }

  @media (max-width: 767px) {
    padding: 0;
    border: none;
  }
`;

const TeamCard = ({
  image, title, subtitle, body,
}) => (
  <Card>
    <Row>
      <Column size="8" mobile="8">
        <div className="team-title">
          <h3>{title}</h3>
          <small>{subtitle}</small>
        </div>
      </Column>
      <Column size="4" mobile="4">
        <img src={image} alt="" />
      </Column>
      <Column size="12">
        <p>{body}</p>
      </Column>
    </Row>
  </Card>
);

export default TeamCard;
