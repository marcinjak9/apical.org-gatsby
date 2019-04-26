import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Wrapper = styled.article`
  margin-bottom: 1rem;
  margin-top: 1rem;

  h3 {
    font-size: var(--font-subheader);
  }

  p {
    color: var(--text-grey);
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 0;
    font-size: var(--font-body);
  }

  a {
    text-decoration: underline;
    font-size: var(--font-body-secondary);
  }
`

const FaqItem = ({ title, body, url }) => (
  <Wrapper>
    <h3>{title}</h3>
    <p>{body}</p>
    <Link to={url}>
      <a target="_blank">View More</a>
    </Link>
  </Wrapper>
)

export default FaqItem
