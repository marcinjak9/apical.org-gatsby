import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Button from './Button';
import { Container, Row, Column } from './Global';

const iubenda = '(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);';

const StyledFooter = styled.footer`
  background: var(--darkblue);
  color: #fff;
  padding: 2rem 1rem;

  img.footer-logo {
    height: 30px;
    /* margin-bottom: 2rem; */
  }

  .footer-section:not(:first-child) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .footer-link {
    display: block;
    color: var(--light);
    font-weight: normal;
    font-size: var(--font-body-secondary);
    margin: 1rem 0;
  }
  .credits {
    font-size: var(--font-body-secondary);
    text-align: center;
    font-weight: normal;

    p {
      margin-top: 1rem;
    }
  }
  @media (max-width: 767px) {
    /* .footer-section:not(:first-child) {
      border-top: 1px solid #fff;
      border-color: color-mod(var(--lightgrey) a(40%));
    }
    .footer-section:last-child {
      border: none;
    } */
    .social-footer {
      border-top: 1px solid #fff;
      border-color: rgba(255, 255, 255, 40%);
    }
  }
`;

const ColumnWithButtons = styled(Column)`
  a {
    margin-bottom: 1rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row>
        <Column size="12" className="footer-section">
          <img
            src="/static/images/logo_white.svg"
            alt="apical-logo-white"
            className="footer-logo"
          />
        </Column>
        <Column size="4" className="footer-section">
          <Row>
            <Column size="6">
              <Link href="/about">
                <a className="footer-link">About</a>
              </Link>
              <Link href="/features">
                <a className="footer-link">La Piattaforma</a>
              </Link>
              {/* <Link href="/pricing">
                <a className="footer-link">Piani</a>
              </Link> */}
            </Column>
            <Column size="6">
              <Link href="https://journal.apical.org">
                <a className="footer-link" target="_blank">
                  Blog
                </a>
              </Link>
              <a
                href="https://www.iubenda.com/privacy-policy/14773504"
                className="iubenda-nostyle no-brand iubenda-embed footer-link"
                title="Privacy Policy "
              >
                Privacy Policy
              </a>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{ __html: iubenda }}
              />
            </Column>
          </Row>
        </Column>
        <Column size="4" className="footer-section social-footer">
          <Row>
            <Column size="6" mobile="6">
              <Link href="https://www.linkedin.com/company/apical-org/">
                <a className="footer-link" target="_blank">
                  <span className="icon icon-arrow_right" />
                  Linkedin
                </a>
              </Link>
              <Link href="https://www.instagram.com/apical_official/">
                <a className="footer-link" target="_blank">
                  <span className="icon icon-arrow_right" />
                  Instagram
                </a>
              </Link>
              <Link href="https://www.facebook.com/apical.org/">
                <a className="footer-link" target="_blank">
                  <span className="icon icon-arrow_right" />
                  Facebook
                </a>
              </Link>
            </Column>
          </Row>
        </Column>
        <ColumnWithButtons size="4" className="footer-section">
          {/* <Button href="/" light fluid icon="arrow" primary spaced>
            Sign up now
          </Button> */}
          <Button
            href="tel:+393922606862"
            primary
            light
            darkBg
            fluid
            icon="arrow"
          >
            Chiamaci
            {'   '}
            <span>+39 02 2111 9080</span>
          </Button>
          <Button
            href="mailto:info@apical.org"
            primary
            light
            darkBg
            fluid
            icon="arrow"
          >
            Scrivici
            {'   '}
            <span>info@apical.org</span>
          </Button>
        </ColumnWithButtons>
      </Row>
    </Container>
    <div className="credits">
      <p>© 2019 Apical s.r.l. All Rights Reserved</p>
    </div>
  </StyledFooter>
);

export default Footer;
