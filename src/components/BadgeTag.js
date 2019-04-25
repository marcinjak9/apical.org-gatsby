import React from 'react';
import styled from '@emotion/styled';

const Tag = styled.div`
  position: absolute;
  color: var(--light);
  font-size: var(--font-body-secondary);
  padding: 0.8rem 1.4rem;

  background-color: var(--fucsia);
`;

const BadgeTag = ({ children }) => <Tag>{children}</Tag>;

export default BadgeTag;
