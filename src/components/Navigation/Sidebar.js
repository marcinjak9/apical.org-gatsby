/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Button from '../Button'
import Link from '../LinkWrapper'
import { Container, Row, Column } from '../Global'
import Footer from '../Footer'
import Socials from '../Socials'
// import SubMenu from './SubMenu'

const NavContainer = styled.div`
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
  display: flex;
  flex-direction: column;

  .icon-close {
    color: var(--light);
    font-size: 1.2rem;
  }

  .privacy {
    padding: 1rem 3rem;
    a {
      color: var(--light);
    }
  }

  .socials {
    max-width: 150px;
  }
`

const Navigation = styled.div`
  padding: 0.9rem 1rem;
  border-bottom: 1px solid color-mod(var(--lightgrey) a(40%));
  color: var(--light);
  width: 100%;

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
    height: 35px;
  }
`

const NavigationBody = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  flex: 1;
  padding: 1rem;

  ul {
    list-style: none;
    margin: 0;
    margin-top: 4rem;
    padding: 0;

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

  @media (max-width: 767px) {
    margin-bottom: 0;

    ul {
      margin-top: 0;
    }
  }
`

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
`

const Sidebar = ({
  open,
  onClose,
  logo,
  menuItemsLeft,
  menuItemsRight,
  contacts,
}) => (
  <NavContainer open={open}>
    <Container style={{ flex: 1 }}>
      <Navigation>
        <img src={logo} alt="apical-logo" />
        <span>MENU</span>
        <a href="#" onClick={onClose}>
          <i className="icon-close" />
        </a>
      </Navigation>
      <Row>
        <Column size="6">
          <NavigationBody>
            <ul>
              {menuItemsLeft.map((m, i) => (
                <li key={i}>
                  <Link to={m.url}>{m.text}</Link>
                </li>
              ))}
              {/* <SubMenu /> */}
            </ul>
          </NavigationBody>
        </Column>
        <Column size="6">
          <NavigationBody>
            <ul>
              {menuItemsRight.map((m, i) => (
                <li key={i}>
                  <Link to={m.url}>{m.text}</Link>
                </li>
              ))}
              {/* <SubMenu /> */}
            </ul>
          </NavigationBody>
        </Column>
        <Column size="6">
          <div className="socials">
            <h3>Social</h3>
            <Socials />
          </div>
        </Column>
        <Column size="6">
          {contacts.phone && (
            <Button
              href={`tel:${contacts.phone}`}
              primary
              light
              darkBg
              fluid
              external
              style={{ marginBottom: '1rem' }}
            >
              Chiamaci
              {'   '}
              <span>{contacts.phone}</span>
            </Button>
          )}
          {contacts.email && (
            <Button
              href={`mailto:${contacts.email}`}
              primary
              light
              darkBg
              fluid
              external
            >
              Scrivici
              {'   '}
              <span>{contacts.email}</span>
            </Button>
          )}
        </Column>
        {/* <div className="privacy">
          <a
            href="https://www.iubenda.com/privacy-policy/14773504"
            className="iubenda-nostyle no-brand iubenda-embed"
            title="Privacy Policy "
          >
            Privacy Policy
          </a>
        </div> */}
        {/* <NavigationFooter>
          {contacts.phone && (
            <Button href={`tel:${contacts.phone}`} outline light external>
              Chiamaci
              {'   '}
              <span>{contacts.phone}</span>
            </Button>
          )}
          {contacts.email && (
            <Button href={`mailto:${contacts.email}`} outline light external>
              Scrivici
              {'   '}
              <span>{contacts.email}</span>
            </Button>
          )}
        </NavigationFooter> */}
      </Row>
    </Container>
    <Footer sidebar />
  </NavContainer>
)

export default Sidebar
