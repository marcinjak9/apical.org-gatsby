import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';
import { Row, Column } from '../components/Global';

const withBg = (props) => {
  if (props.bgImage) {
    return css`
      padding-top: 5rem;
      padding-bottom: 5rem;
      &:before {
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.8);
      }

      div {
        z-index: 3;
      }

      h3 {
        font-size: var(--font-title);
        margin-bottom: 2rem;
      }

      p {
        font-size: var(--font-subheader);
        /* line-height: 2.5rem; */
      }
    `;
  }
  return '';
};

const Wrapper = styled(SectionContainer)`
  /* background-color: var(--blue); */
  background: ${props => (props.bgImage ? `url(${props.bgImage})` : 'var(--blue)')};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  position: relative;
  min-height: ${props => (props.fullHeigh ? '100vh' : '50vh')};

  h3 {
    color: var(--light);
    font-size: var(--font-title);
    font-weight: bold;
    white-space: pre-line;
  }

  p {
    font-size: var(--font-subheader);
    color: var(--light);

    &.quote {
      font-style: italic;
      margin-top: 2rem;
    }
  }

  ${withBg};
`;

const Cta = ({
  title, body, quote, cta, bgImage, fullHeigh,
}) => (
  <Wrapper bgImage={bgImage} fullHeigh={fullHeigh}>
    <Row>
      <Column size="8" offset="3" textCenter>
        <h3>{title}</h3>
        <p>{body}</p>
        <p className="quote">{quote}</p>
      </Column>
      {cta && cta.text && cta.url && (
        <Column size="12" textCenter>
          <Button href={cta.url} icon="arrow" primary light>
            {cta.text}
          </Button>
        </Column>
      )}
    </Row>
  </Wrapper>
);

export default Cta;
