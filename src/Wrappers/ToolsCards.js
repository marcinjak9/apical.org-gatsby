import React from 'react';
import SectionContainer from '../components/SectionContainer';
import TablerCards from '../components/TablerCards';

const ITEMS = [
  {
    title: 'Dashboard',
    image: '',
    body:
      'Una Dashboard per tenere sotto controllo le attività dei tuoi store: inventari, ordini, pagamenti, clienti.',
    features: [
      { image: '', text: 'Google Drive' },
      { image: '', text: 'Paypal' },
      { image: '', text: 'Excel' },
      { image: '', text: 'Calendar' },
    ],
  },
  {
    title: 'Dashboard 1',
    image: '',
    body:
      'Una Dashboard per tenere sotto controllo le attività dei tuoi store: inventari, ordini, pagamenti, clienti.',
    features: [
      { image: '', text: 'Google Drive' },
      { image: '', text: 'Paypal' },
      { image: '', text: 'Excel' },
      { image: '', text: 'Calendar' },
    ],
  },
  {
    title: 'Dashboard 2',
    image: '',
    body:
      'Una Dashboard per tenere sotto controllo le attività dei tuoi store: inventari, ordini, pagamenti, clienti.',
    features: [
      { image: '', text: 'Google Drive' },
      { image: '', text: 'Paypal' },
      { image: '', text: 'Excel' },
      { image: '', text: 'Calendar' },
    ],
  },
];

const ToolsCards = ({ title, titleCenter, items }) => (
  <SectionContainer
    title={title || 'Tools'}
    className="tools-cards no-padd-mobile"
    greyBg
    titleCenter={titleCenter}
  >
    <TablerCards items={items || ITEMS} titleSize={2} />
  </SectionContainer>
);

export default ToolsCards;
