/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from '@emotion/styled';
import SectionContainer from '../components/SectionContainer';
import Carousel from '../components/Carousel';
import { Row, Column } from '../components/Global';
import Button from '../components/Button';

const PresentationRow = styled(Row)`
  margin: 0 auto;
  min-height: 420px;
  h3 {
    font-size: var(--font-headline);
    line-height: 2.6rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: var(--font-subheader);
    padding-left: 0;
    margin-bottom: 2rem;
  }
  h4 {
    font-size: var(--font-subheader);
    color: var(--blue);
    text-align: center;
  }

  .body {
    padding-right: 4rem;
    p {
      padding-left: 0;
    }
  }

  img {
    width: 100%;
    /* padding: 1rem; */
  }

  @media (max-width: 767px) {
    h3 {
      font-size: var(--font-title);
    }
    p {
      font-size: var(--font-body);
      margin-bottom: 2rem;
    }

    .body {
      padding-right: 0;
      padding: 0 0.2rem;
    }

    img {
      padding: 2rem;
      padding-top: 2rem;
    }
  }
`;

const Presentation = ({ greyBg, title, subtitle }) => (
  <SectionContainer
    title={title}
    subtitle={subtitle}
    greyBg={greyBg}
    titleCenter
  >
    <Carousel
      slides={[
        <PresentationRow>
          <Column size="6">
            <div className="body">
              <h3>1. Dashboard cloud</h3>
              <p>
                È visibile solo ai Creators e permette di creare prodotti con
                estrema semplicità, di monitorare le vendite, gestire gli
                inventari in tempo reale e conoscere i dettagli di ogni ordine e
                ospite. Tutto ciò che ti serve in un unico tool professionale e
                immediato.
              </p>
              {/* <a href="#onboarding" className="underline">
                Iscriviti ora
              </a> */}
            </div>
          </Column>
          <Column size="6" style={{ textAlign: 'center' }}>
            <img src="/static/images/mockups/dashboard-triple.png" alt="" />
          </Column>
        </PresentationRow>,
        <PresentationRow>
          <Column size="6">
            <div className="body">
              <h3>2.1 Vetrina E-commerce</h3>
              <p>
                L'e-commerce è composto da due parti, la prima è la vetrina
                online, dove i Creatori possono organizzare e descrivere
                l'offerta grazie a una serie di bellissime pagine personalizzate
                in base alla propria identità e comunicazione.
              </p>
              {/* <a href="#onboarding" className="underline">
                Iscriviti ora
              </a> */}
            </div>
          </Column>
          <Column size="6" style={{ textAlign: 'center' }}>
            <img src="/static/images/mockups/ecommerce-2.png" alt="" />
          </Column>
        </PresentationRow>,
        <PresentationRow>
          <Column size="6">
            <div className="body">
              <h3>2.2 E-commerce</h3>
              <p>
                La seconda parte è il Configuratore, una pagina in cui gli
                ospiti possono scegliere ciò che desiderano, comporre la propria
                esperienza e prenotarla in tempo reale.
              </p>
              {/* <a href="#onboarding" className="underline">
                Iscriviti ora
              </a> */}
            </div>
          </Column>
          <Column size="6" style={{ textAlign: 'center' }}>
            <img src="/static/images/mockups/ecommerce-1.png" alt="" />
          </Column>
        </PresentationRow>,
        <PresentationRow>
          <Column size="6">
            <div className="body">
              <h3>3 Sistema di pagamenti</h3>
              <p>
                Apical permette all’utente finale di pagare con carta o bonifico
                online e al Creator di ricevere immediatamente il denaro.
                L’utente può decidere di rateizzare l’acquisto e aggiungere una
                donazione al carrello contribuendo a piantare un nuovo albero
                nelle Apical Forest realizzate in partnership con Treedom.
              </p>
              {/* <a href="#onboarding" className="underline">
                Iscriviti ora
              </a> */}
            </div>
          </Column>
          <Column size="6" style={{ textAlign: 'center' }}>
            <img src="/static/images/mockups/payment-3.png" alt="" />
          </Column>
        </PresentationRow>,
      ]}
    />
  </SectionContainer>
);

export default Presentation;
