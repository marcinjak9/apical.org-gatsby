import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { Row, Column } from './Global';

const ToolsRow = styled(Row)`
  .list-item {
    padding: 0 2rem;

    i {
      font-size: var(--font-title);
      position: relative;
      top: 4px;
      padding-right: 8px;
    }

    h4 {
      font-size: var(--font-title);
      text-decoration: underline;
      margin-bottom: 1rem;
      display: inline;
    }

    p {
      padding: 0;
      padding-left: 2rem;
      margin-bottom: 1rem;
    }
    small {
      font-size: var(--font-body-secondary);
      margin-bottom: 1rem;
      color: var(--text-grey);
      display: inline-block;
    }
  }
`;

const TOOLS = [
  {
    title: 'Dashboard',
    body: 'Save time. Push your creativity, your performances, your Impact.',
    quote: 'In place of Drive, Paypal, Excel',
  },
  {
    title: 'eCommerce',
    body: 'Save time. Push your creativity, your performances, your Impact.',
    quote: 'In place of Drive, Paypal, Excel',
  },
  {
    title: 'Checkout',
    body: 'Save time. Push your creativity, your performances, your Impact.',
    quote: 'In place of Drive, Paypal, Excel',
  },
];

const Tools = () => (
  <ToolsRow>
    {TOOLS.map((tool, i) => (
      <Column size="4" key={i} className="list-item">
        <div>
          <i className="icon-arrow_right" />
          <h4>{tool.title}</h4>
        </div>
        <p>
          {tool.body}
          <small>{tool.quote}</small>
        </p>
      </Column>
    ))}

    <Column size="12" style={{ textAlign: 'center' }}>
      <Button primary href="/" icon="arrow">
        View Features
      </Button>
    </Column>
  </ToolsRow>
);

export default Tools;
