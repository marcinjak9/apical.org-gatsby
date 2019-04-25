import React from 'react';
import styled from '@emotion/styled';
import TablerCards from '../components/TablerCards';
import Button from '../components/Button';
import { Container, Row, Column } from '../components/Global';
import SimpleCard from '../components/SimpleCard';

const FEATURES = [
  {
    title: 'CREARE',
    image: '✍️',
    body:
      'Costruisci autonomamente la pagina per il tuo viaggio in dieci minuti',
  },
  {
    title: 'GESTIRE',
    image: '🗺',
    body:
      'Ricevi e gestisci le tue prenotazioni e i pagamenti online come preferisci',
  },
  {
    title: 'VENDERE',
    image: '📦',
    body:
      'I tuoi clienti possono prenotare e pagare la loro esperienza in soli 5 clic',
  },
  {
    title: 'IMPATTO',
    image: '🌲',
    body: 'Coinvolgi il tuo pubblico in azioni ad impatto sociale e ambientale',
  },
];

const Card = styled(SimpleCard)`
  height: 100%;
`;

const CustomRow = styled(Row)`
  margin-bottom: 2rem;
`;

const HowItWorks = () => (
  <>
    {/* <TablerCards items={FEATURES} /> */}
    <CustomRow>
      {FEATURES.map((feature, i) => (
        <Column key={i} size="3">
          <Card
            // bodySmall
            index={i}
            titleSize={2}
            title={feature.title}
            body={feature.body}
            image={feature.image}
          />
        </Column>
      ))}
    </CustomRow>
    <Row>
      <Column size="12" textCenter>
        <Button href="#onboarding" outline icon="arrow">
          Inizia subito
        </Button>
      </Column>
    </Row>
  </>
);

export default HowItWorks;
