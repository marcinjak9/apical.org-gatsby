import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #fff;
    font-size: 1.5rem;
  }
`

const Socials = ({ facebook, linkedin, instagram }) => (
  <Wrapper>
    {facebook && (
      <a href={facebook}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    )}
    {linkedin && (
      <a href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    )}
    {instagram && (
      <a href={instagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    )}
  </Wrapper>
)

const SocialWrapper = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-menu" } }) {
          frontmatter {
            socialItems {
              facebook
              instagram
              linkedin
            }
          }
        }
      }
    `}
    render={({
      markdownRemark: {
        frontmatter: { socialItems },
      },
    }) => <Socials {...socialItems} />}
  />
)

export default SocialWrapper
