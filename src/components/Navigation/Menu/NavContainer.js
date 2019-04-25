import React from 'react';
import styled from '@emotion/styled';

const Container = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0.9rem 1rem;

  img {
    height: 40px;
  }

  .mobile-logo {
    display: none;
  }

  h2 {
    font-size: var(--font-body-secondary);
    margin-bottom: 0;
    font-weight: normal;
    margin-right: 100px;
  }

  .mobile-menu {
    display: none;
  }

  .nav-items.nav-center {
    a {
      padding: 1rem;

      &.active {
        text-decoration: underline;
      }
    }
  }

  .sub-menu-desktop {
    a {
      display: block;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 767px) {
    img {
      display: none;
    }
    .mobile-logo {
      display: block;
      height: 20px;
    }

    h2 {
      font-size: var(--font-body-secondary);
      text-align: center;
      margin: 0;
      max-width: 86px;
    }

    .mobile-menu {
      display: block;
    }

    .nav-items {
      display: none;
    }
  }
`;

const NavContainer = ({ children }) => (
  <header>
    <Container>{children}</Container>
  </header>
);

export default NavContainer;
