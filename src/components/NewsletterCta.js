import React from 'react'
import styled from '@emotion/styled'
import InputWithSubmit from './InputWithSubmit'
import SectionContainer from './SectionContainer'
import { Row, Column } from './Global'

const NewsletterCol = styled(Column)`
  input[type="text"] {
    margin-bottom: 1rem;
  }
  .form-discolsure {
    color: var(--text-grey);
  }
`

const NewsletterCta = ({ title, greyBg }) => (
  <SectionContainer title={title} greyBg={greyBg}>
    <Row>
      <Column size="6" textCenterMobile>
        <h3>
          Stay up to date and receive
          <br />
          more info about Apical
        </h3>
      </Column>
      <NewsletterCol size="6">
        <InputWithSubmit
          placeholder="Your email"
          value=""
          onChange={() => console.log('change')}
          submit={() => console.log('submit')}
        />
        <small className="form-discolsure">
          By clicking Confim you agree with Apical Terms & Conditions and
          Privacy policy
        </small>
      </NewsletterCol>
    </Row>
  </SectionContainer>
)

export default NewsletterCta
