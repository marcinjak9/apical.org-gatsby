import React from 'react';
import styled from '@emotion/styled';
import { Column } from './Global';

const colors = ['var(--blue)', 'var(--green)', 'var(--fucsia)'];

const Wrapper = styled(Column)`
  /* border-right: 1px solid var(--lightgrey); */
  font-size: var(--font-body-secondary);

  header {
    padding: 1rem 2rem;

    p {
      font-size: var(--font-body);
      text-align: center;
      color: var(--text-grey);
      padding: 0 2rem;
    }
  }

  h3 {
    color: ${props => colors[props.index]};
    font-size: var(--font-title);
    text-align: center;
  }

  .commission {
    padding: 1rem 2rem;
    color: var(--text-grey);
    border-top: 1px solid var(--lightgrey);
    border-bottom: 1px solid var(--lightgrey);

    span {
      color: var(--darkblue);
      &.big {
        font-size: var(--font-subheader);
      }
    }

    .c-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
  }

  .includes {
    color: var(--text-grey);
    padding: 1rem 2rem;

    ul {
      padding-left: 0;
      font-size: var(--font-body);
      padding-top: 1rem;
    }
  }

  @media (max-width: 767px) {
    display: ${props => (props.selected ? 'block' : 'none')};
  }
`;

const ListItem = styled.li`
  color: var(--text-black);
  font-weight: bold;
  font-size: var(--font-body);
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  border-bottom: 1px solid var(--lightgrey);
  list-style: none;
  /* opacity: ${props => (props.active ? 1 : 0.5)}; */

  span {
    display: ${props => (props.active ? 'none' : 'inline-block')};
    margin: 0 10px;
    background-color: var(--blue);
    padding: 3px 10px;
    border-radius: 4px;
    color: #fff;
  }

  :before {
    content: '\\2022';
    color: var(--text-grey);
    font-weight: bold;
    display: inline-block;
    width: 0.5rem;
    font-size: var(--font-subheader);
    padding-right: 1.3rem;
  }

  :last-child {
    border-bottom: none;
  }
`;

const PricingColumn = ({
  title,
  description,
  commission,
  features,
  selected,
  setupFee,
  monthly,
  index,
}) => (
  <Wrapper size="6" offset="4" selected={selected} index={index}>
    <header>
      <h3>{title}</h3>
      <p>{description}</p>
    </header>
    <div className="includes">
      Include
      <ul>
        {features
          && features.map((f, i) => (
            <ListItem key={i} active={f.active}>
              {f.text}
              <span>Pro</span>
            </ListItem>
          ))}
      </ul>
    </div>
    <div className="commission">
      <div className="c-item">
        Costi di setup
        <span>{setupFee}</span>
      </div>
      <div className="c-item">
        Costo mensile
        <span>{monthly}</span>
      </div>
      <div className="c-item">
        Commission ALL IN
        <span className="big">{commission}</span>
      </div>
    </div>
  </Wrapper>
);

export default PricingColumn;
