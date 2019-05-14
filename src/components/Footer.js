import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Button from './Button'
import { Container, Row, Column } from './Global'
import Link from './LinkWrapper'
import Image from './image'

const iubenda = '(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);'

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
`

const ColumnWithButtons = styled(Column)`
  a {
    margin-bottom: 1rem;
  }
`

const FooterInner = ({
  contacts, menuItems, socialItems, logo,
}) => (
  <StyledFooter>
    <Container>
      <Row>
        <Column size="12" className="footer-section">
          <Image src={logo} alt="apical-logo-white" className="footer-logo" />
        </Column>
        <Column size="4" className="footer-section">
          <Row>
            <Column size="6">
              {menuItems.slice(0, menuItems.length / 2).map((m, i) => (
                <Link key={i} to={m.url} className="footer-link">
                  {m.text}
                </Link>
              ))}
            </Column>
            <Column size="6">
              {menuItems
                .slice(menuItems.length / 2, Math.max(menuItems.length))
                .map((m, i) => {
                  if (m.url === '#privacy') {
                    return (
                      <React.Fragment key={i}>
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
                      </React.Fragment>
                    )
                  }
                  return (
                    <Link key={i} to={m.url} className="footer-link">
                      {m.text}
                    </Link>
                  )
                })}
            </Column>
          </Row>
        </Column>
        <Column size="4" className="footer-section social-footer">
          <Row>
            <Column size="6" mobile="6">
              {socialItems
                && socialItems.map((si, i) => (
                  <a
                    key={i}
                    href={si.url}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon icon-arrow_right" />
                    {si.text}
                  </a>
                ))}
            </Column>
          </Row>
        </Column>
        {contacts && (
          <ColumnWithButtons size="4" className="footer-section">
            <Button
              href={`tel:${contacts.phone}`}
              primary
              light
              darkBg
              fluid
              icon="arrow"
              external
            >
              Chiamaci
              {'   '}
              <span>{contacts.phone}</span>
            </Button>
            <Button
              href={`mailto:${contacts.email}`}
              primary
              light
              darkBg
              fluid
              icon="arrow"
              external
            >
              Scrivici
              {'   '}
              <span>{contacts.email}</span>
            </Button>
          </ColumnWithButtons>
        )}
      </Row>
    </Container>
    <div className="credits">
      <p>© 2019 Apical s.r.l. All Rights Reserved</p>
    </div>
  </StyledFooter>
)

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-menu" } }) {
          frontmatter {
            logo
            mobileLogo
            menuItems {
              text
              url
            }
            socialItems {
              text
              url
            }
            contacts {
              email
              phone
            }
          }
        }
      }
    `}
    render={({ markdownRemark: { frontmatter } }) => (
      <FooterInner {...frontmatter} />
    )}
  />
)

export default Footer
