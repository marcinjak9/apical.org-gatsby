import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TestimonialItem from '../components/TestimonialItem'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import Button from '../components/Button'

const testimonials = [
  {
    name: 'Federico Finotto',
    body:
      'Il nostro progetto cresce molto velocemente, senza Apical sarebbe impossibile gestire la burocrazia che ogni booking produce e offrire al cliente un’esperienza di prenotazione confortevole e sicura',
    image: '/static/images/testimonials/finotto.jpg',
    company: 'Surfweek',
  },
  {
    name: 'Alessandro Mazzone',
    body:
      'Volevamo da sempre spingere il nostro pubblico a vivere Genova e non solo il Festival. Grazie ad Apical collaborare con musei, ostelli e iniziative locali è diventato facile, ora il Festival si è trasformato in un’esperienza completa',
    image: '/static/images/testimonials/mazzone.jpg',
    company: 'ElectroPark Festival',
  },
  {
    name: 'Roberto Malossi',
    body:
      'Per noi è fondamentale permettere agli ospiti di aggiungere skipass, cene e attività ai loro pacchetti. Con Apical è diventato tutto molto semplice e finalmente anche noi abbiamo iniziato a vendere online.',
    image: '/static/images/testimonials/malossi.jpg',
    company: 'Snow Week',
  },
]

const TestimonialsSection = ({ title, greyBg, cta }) => (
  <SectionContainer
    title={title || 'Cosa dicono di noi'}
    greyBg={greyBg}
    titleCenter
  >
    <Row scrolling>
      <StaticQuery
        query={graphql`
          query TestimonialQuery {
            markdownRemark(
              frontmatter: { templateKey: { eq: "testimonials" } }
            ) {
              id
              frontmatter {
                testimonials {
                  body
                  company
                  image
                  name
                }
              }
            }
          }
        `}
        render={(data) => {
          if (data.markdownRemark.frontmatter.testimonials) {
            return data.markdownRemark.frontmatter.testimonials.map(
              (testimonial, i) => (
                <Column key={i} size="4" slide>
                  <TestimonialItem
                    name={testimonial.name}
                    body={testimonial.body}
                    image={testimonial.image}
                    company={testimonial.company}
                  />
                </Column>
              ),
            )
          }
          return null
        }}
      />
    </Row>
    {cta && (
      <Row>
        <Column size="12">
          <Button href={cta.url} primary>
            {cta.text}
          </Button>
        </Column>
      </Row>
    )}
  </SectionContainer>
)

export default TestimonialsSection
