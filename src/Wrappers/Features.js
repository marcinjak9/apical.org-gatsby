import React from 'react';
import styled from '@emotion/styled';
import SectionContainer from '../components/SectionContainer';
import { Row, Column } from '../components/Global';
import Emoji from '../components/Emoji';
import Button from '../components/Button';

const Wrapper = styled(SectionContainer)`
  h3.title {
    margin-bottom: 4rem;
  }
  h3 {
    font-size: var(--font-subheader);
  }
  p {
    font-size: var(--font-body);
    padding-left: 0;
    color: var(--text-grey);
  }

  ul {
    padding-left: 1rem;
  }
`;

const Features = ({
  title: sectionTitle, greyBg, features, cta,
}) => (
  <Wrapper title={sectionTitle || 'Features'} greyBg={greyBg} titleCenter>
    <Row>
      {features
        && features.map(({ title, body, emoji }, i) => (
          <Column size="4" key={i}>
            <Row gap="0">
              <Column size="2" mobile="2">
                <Emoji emoji={emoji} size="2" />
              </Column>
              <Column size="10" mobile="10">
                <h3>{title}</h3>
                {body}
              </Column>
            </Row>
          </Column>
        ))}
      {cta && (
        <Column size="12" textCenter style={{ marginTop: '4rem' }}>
          <Button href={cta.url} icon="arrow" primary>
            {cta.text}
          </Button>
        </Column>
      )}
    </Row>
  </Wrapper>
);

export default Features;
