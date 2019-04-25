/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Button from '../Button';
import SubMenu from './SubMenu';

const Container = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  transform: ${props => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.open ? 'all' : 'none')};
  background-color: var(--darkblue);
  color: #fff;
  transition: ${props => (props.open
    ? 'transform 0.3s ease-out'
    : 'transform 0.3s ease-out, visibility 0s 0.7s')};
  overflow-y: scroll;

  .icon-close {
    color: var(--light);
    font-size: 1rem;
  }

  .privacy {
    padding: 1rem 3rem;
    a {
      color: var(--light);
    }
  }
`;

const Navigation = styled.div`
  padding: 0.9rem 1rem;
  border-bottom: 1px solid color-mod(var(--lightgrey) a(40%));
  color: var(--light);

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: var(--font-body-secondary);
    margin: 0;
    padding: 0;
    line-height: 0;
    font-weight: normal;
  }

  img {
    height: 20px;
  }
`;

const NavigationBody = styled.div`
  width: 100%;

  ul {
    list-style: none;
    padding: 1rem;
    margin: 0;
    margin-top: 4rem;

    li a {
      font-size: var(--font-subheader);
      font-weight: normal;
      display: block;
      width: 100%;
      border-bottom: 1px solid color-mod(var(--lightgrey) a(40%));
      padding: 1rem;
      color: var(--light);
    }

    &.sub-menu {
      margin: 0;
      border-bottom: 1px solid color-mod(var(--lightgrey) a(70%));

      li a {
        font-size: var(--font-body);
        border-bottom: 0;
        padding-left: 1.5rem;
      }
    }
  }
`;

const NavigationFooter = styled.div`
  h4,
  a:not(.btn) {
    display: block;
    font-size: var(--font-body);
    color: color-mod(var(--light) a(70%));
  }
  padding: 1.8rem 2rem;

  a {
    margin: 0;
    margin-top: 1rem;
  }
`;

const Sidebar = ({ open, onClose }) => (
  <Container open={open}>
    <Navigation>
      <img src="/static/images/a-logo-white.svg" alt="apical-logo" />
      <span>MENU</span>
      <a href="#" onClick={onClose}>
        <i className="icon-close" />
      </a>
    </Navigation>

    <NavigationBody>
      <ul>
        {/* <li>
          <Link href="/discover">
            <a>
              <i className="icon-arrow_right" />
              Discover
            </a>
          </Link>
        </li> */}
        {/* <SubMenu /> */}
        <li>
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href="/features">
            <a>La Piattaforma</a>
          </Link>
        </li>
        {/* <li>
          <Link prefetch href="/pricing">
            <a>Piani</a>
          </Link>
        </li> */}
        <li>
          <Link prefetch href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="https://journal.apical.org">
            <a target="_blank">Blog</a>
          </Link>
        </li>
      </ul>
    </NavigationBody>
    <div className="privacy">
      <a
        href="https://www.iubenda.com/privacy-policy/14773504"
        className="iubenda-nostyle no-brand iubenda-embed"
        title="Privacy Policy "
      >
        Privacy Policy
      </a>
    </div>
    <NavigationFooter>
      <Button href="tel:+393922606862" outline light>
        Chiamaci
        {'   '}
        <span>+39 02 2111 9080</span>
      </Button>
      <Button href="mailto:info@apical.org" outline light>
        Scrivici
        {'   '}
        <span>info@apical.org</span>
      </Button>
    </NavigationFooter>
  </Container>
);

export default Sidebar;
