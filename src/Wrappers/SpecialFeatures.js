import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';
import SimpleCard from '../components/SimpleCard';
import Button from '../components/Button';

const SpecialFeatures = ({
  title, greyBg, subtitle, cta,
}) => (
  <SectionContainer
    title={title}
    subtitle={subtitle}
    titleCenter
    greyBg={greyBg}
  >
    <Row scrolling>
      <Column slide size="4">
        <SimpleCard
          image="🏡"
          title="Accomodation"
          body="Gestisci come preferisci le strutture di alloggio, la composizione delle camere, le formule di room sharing e tanto altro"
          small
          fullHeight
        />
      </Column>
      <Column slide size="4">
        <SimpleCard
          image="🏄🏽‍"
          title="Activities"
          body="Puoi caricare tutte le esperienze che vuoi e personalizzarle con parametri modulabili sia per i contenuti che per i pagamenti"
          small
          fullHeight
        />
      </Column>
      <Column slide size="4">
        <SimpleCard
          image="🆘"
          title="Assicurazioni"
          body="Gestisci le tue assicurazioni di viaggio a costo fisso o in percentuale. Proponi diverse soluzioni o pacchetti per i tuoi clienti"
          small
          fullHeight
        />
      </Column>
      <Column slide size="4" offset="3">
        <SimpleCard
          image="🚌"
          title="Trasporti"
          body="Pullman o aereo? Organizza e gestisci i tuoi trasporti pianificando itinerari con uno o più mezzi."
          small
          fullHeight
        />
      </Column>
      <Column slide size="4">
        <SimpleCard
          image="👕"
          title="Servizi e merchandising"
          body="Permetti ai tuoi clienti di acquistare la tua t-shirt e di ritirarla direttamente al check-in"
          small
          fullHeight
        />
      </Column>
    </Row>
    {cta && (
      <Row style={{ marginTop: '2rem' }}>
        <Column size="12" textCenter>
          {cta.title && <h3>{cta.title}</h3>}
          <Button href={cta.url} outline icon="arrow">
            {cta.text}
          </Button>
        </Column>
      </Row>
    )}
  </SectionContainer>
);

export default SpecialFeatures;
