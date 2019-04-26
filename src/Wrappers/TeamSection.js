import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SectionContainer from '../components/SectionContainer'
import TeamCard from '../components/TeamCard'
import { Row, Column } from '../components/Global'

const TeamSection = props => (
  <SectionContainer {...props}>
    <Row>
      <StaticQuery
        query={graphql`
          query TeamQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "team" } }) {
              id
              frontmatter {
                Members {
                  body
                  role
                  image
                  name
                }
              }
            }
          }
        `}
        render={(data) => {
          if (data.markdownRemark.frontmatter.Members) {
            return data.markdownRemark.frontmatter.Members.map((m, i) => (
              <Column size="6" key={i}>
                <TeamCard
                  title={m.name}
                  subtitle={m.role}
                  body={m.body}
                  image={m.image}
                />
              </Column>
            ))
          }
          return null
        }}
      />
    </Row>
  </SectionContainer>
)

export default TeamSection
