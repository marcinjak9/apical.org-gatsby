import React from 'react';
import SimpleCard from './SimpleCard';
import Badge from './Badge';
import { Container, Row, Column } from './Global';

const GET_STARTED = [
  {
    title: 'Sign up',
    body: 'Open an account for free. Design an Experience. Go live today',
  },
  {
    title: 'Create',
    body: 'Open an account for free. Design an Experience. Go live today',
  },
  {
    title: 'Sell',
    body: 'Open an account for free. Design an Experience. Go live today',
  },
];

const GetStarted = () => (
  <Container>
    <h3 className="container-title small-title">Get Started</h3>
    <Row scrolling>
      {GET_STARTED.map((item, i) => (
        <Column size="4" slide key={i}>
          <SimpleCard
            key={i}
            title={item.title}
            body={item.body}
            small
            badge={<Badge>{i + 1}</Badge>}
          />
        </Column>
      ))}
    </Row>
  </Container>
);

export default GetStarted;
