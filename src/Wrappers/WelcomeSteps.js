import React from 'react';
import styled from '@emotion/styled';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';

const Section = styled(SectionContainer)`
  min-height: initial;

  h3.title {
    margin-bottom: 3rem;
  }

  h4 {
    font-size: var(--font-title);
  }

  p {
    font-size: var(--font-body);
  }
`;

const WelcomeSteps = () => (
  <Section title="Iniziare è semplice" titleCenter>
    <Row>
      <Column size="4">
        <h4>1. Intervista</h4>
        <p>
          Prenota una telefonata di pochi minuti con noi per capire insieme come
          aiutarti
        </p>
      </Column>
      <Column size="4">
        <h4>2. Demo</h4>
        <p>
          Ricevi la nostra presentazione completa e una demo della tua
          piattaforma
        </p>
      </Column>
      <Column size="4">
        <h4>3. Go Live</h4>
        <p>
          In sole 4 ore potremo mettere online la tua offerta e formarti
          all’utilizzo in completa autonomia della piattaforma
        </p>
      </Column>
    </Row>
  </Section>
);

export default WelcomeSteps;
