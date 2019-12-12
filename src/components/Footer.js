import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Button from './Button'
import { Container, Row, Column } from './Global'
import Link from './LinkWrapper'
import Image from './image'
import { language } from '../LanguageProvider'
import Socials from './Socials'

const iubenda = '(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);'

const StyledFooter = styled.footer`
  background: var(--darkblue);
  color: #fff;
  padding: 2rem 1rem;

  img.footer-logo {
    height: 30px;
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

const PartnersRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 960px;
  img {
    width: 100%;
    max-width: 200px;
  }

  .partner-col {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  @media (max-width: 767px) {
    flex-wrap: wrap;
    img {
      max-width: 100px;
    }
  }
`

const FooterInner = (props) => {
  const { logo, partners, sidebar } = props
  const lang = language()
  const { menuItems, contacts } = props[lang]
  return (
    <StyledFooter>
      <Container>
        {!sidebar && (
          <Row>
            <Column size="12" className="footer-section">
              <Image
                src={logo}
                alt="apical-logo-white"
                className="footer-logo"
              />
            </Column>
            <Column size="4" className="footer-section">
              <Row>
                <Column size="12">
                  <h3>Links</h3>
                </Column>
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
                <Column size="12">
                  <h3>Social</h3>
                </Column>
                <Column size="6" mobile="6">
                  <Socials />
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
                  external
                >
                  {contacts.phone}
                </Button>
                <Button
                  href={`mailto:${contacts.email}`}
                  primary
                  light
                  darkBg
                  fluid
                  external
                >
                  {contacts.email}
                </Button>
              </ColumnWithButtons>
            )}
          </Row>
        )}
        <Row>
          <Column size="12">
            <h3>Partners</h3>
          </Column>
        </Row>
        <PartnersRow>
          {partners
            && partners.map((partner, i) => (
              <div className="partner-col">
                <Image src={partner} alt="" grayscale />
              </div>
            ))}
        </PartnersRow>
      </Container>
      <div className="credits">
        <p>Apical s.r.l. è una Start Up innovativa ai sensi dell'art. 4 comma 10 bis</p>
        <p>via Stretta 32, 25128 Brescia (BS) | P.IVA 03958620985 | REA BS-577256 | SCIA 0191363 del SUAP di Milano</p>
        <p>© 2019 All Rights Reserved</p>
      </div>
    </StyledFooter>
  )
}

const Footer = ({ sidebar }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-menu" } }) {
          frontmatter {
            logo
            mobileLogo
            partners
            it {
              menuItems {
                text
                url
              }
              contacts {
                email
                phone
              }
            }
            en {
              menuItems {
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
      }
    `}
    render={({ markdownRemark: { frontmatter } }) => (
      <FooterInner {...frontmatter} sidebar={sidebar} />
    )}
  />
)

export default Footer
