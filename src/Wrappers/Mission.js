import React from 'react';
import styled from '@emotion/styled';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';

const Wrapper = styled(SectionContainer)`
  p {
    font-size: var(--font-headline);
    font-weight: bold;
    line-height: 2.9rem;
  }
`;

const Mission = () => (
  <Wrapper title="Mission" greyBg>
    <Row>
      <Column size="12">
        <p>
          Apical works with best Creators to shape a
          {' '}
          <span className="underline">community</span>
          {' '}
where people come to
          {' '}
          <span className="underline">discover, live and share</span>
          {' '}
their best
          Experiences
        </p>
      </Column>
    </Row>
  </Wrapper>
);

export default Mission;
