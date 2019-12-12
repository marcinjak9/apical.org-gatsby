import React from 'react';
import styled from '@emotion/styled';
import Button from '../components/Button';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';

const PaddedColumn = styled(Column)`
  margin-bottom: 2rem;

  h4 {
    display: inline-block;
    font-size: var(--font-subheader);
    font-weight: bold;
  }

  p {
    padding-left: 2rem;
    padding-top: 1rem;
    font-size: var(--font-body);
  }

  i {
    top: 2px;
    margin-right: 5px;
    font-size: var(--font-title);
  }
`;

const CtaColumn = styled(Column)`
  margin-top: 5rem;
  text-align: center;
`;

const Benefits = () => (
  <SectionContainer
    title="Benefits"
    className="benefits"
    removeHorizontalPadding
  >
    <Row>
      <PaddedColumn size="4">
        <div>
          <i className="list-icon icon-arrow_right" />
          <h4>Offer 2x product value</h4>
        </div>
        <p>
          Il tuo store online in pochi minuti grazie al nostro Builder: schede
          prodotto autogenerate, gestione delle categorie, navigazione filtrata,
          è già tutto incluso!
        </p>
      </PaddedColumn>
      <PaddedColumn size="4">
        <div>
          <i className="list-icon icon-arrow_right" />
          <h4>Offer 2x product value</h4>
        </div>
        <p>
          Il tuo store online in pochi minuti grazie al nostro Builder: schede
          prodotto autogenerate, gestione delle categorie, navigazione filtrata,
          è già tutto incluso!
        </p>
      </PaddedColumn>
      <PaddedColumn size="4">
        <div>
          <i className="list-icon icon-arrow_right" />
          <h4>Offer 2x product value</h4>
        </div>
        <p>
          Il tuo store online in pochi minuti grazie al nostro Builder: schede
          prodotto autogenerate, gestione delle categorie, navigazione filtrata,
          è già tutto incluso!
        </p>
      </PaddedColumn>
      <CtaColumn size="12">
          <Button href="https://journal.apical.org" icon="arrow">
              Scopri il Journal
          </Button>
      </CtaColumn>
    </Row>
  </SectionContainer>
);

export default Benefits;
