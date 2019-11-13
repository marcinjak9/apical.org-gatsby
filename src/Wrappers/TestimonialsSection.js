import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import TestimonialItem from '../components/TestimonialItem'
import SectionContainer from '../components/SectionContainer'
import { Row, Column } from '../components/Global'
import Button from '../components/Button'

const TestimonialsSection = ({
  title, greyBg, cta, testimonials,
}) => (
  <SectionContainer
    title={title || 'Cosa dicono di noi'}
    greyBg={greyBg}
    titleCenter
  >
    <Row scrolling>
      {testimonials.map((testimonial, i) => (
        <Column key={i} size="4" slide className="col" data-items-count={testimonials.length}>
          <TestimonialItem
            name={testimonial.name}
            body={testimonial.body}
            image={testimonial.image}
            company={testimonial.company}
          />
        </Column>
      ))}
    </Row>
    {cta && (
      <Row>
        <Column size="12">
          <Button style={{ textAlign: 'center', marginTop: '5px' }} href={cta.url || cta.link} primary>
            {cta.text}
          </Button>
        </Column>
      </Row>
    )}
  </SectionContainer>
)
// const TestimonialsSection = ({ title, greyBg, cta }) => (
//   <SectionContainer
//     title={title || 'Cosa dicono di noi'}
//     greyBg={greyBg}
//     titleCenter
//   >
//     <Row scrolling>
//       <StaticQuery
//         query={graphql`
//           query TestimonialQuery {
//             markdownRemark(
//               frontmatter: { templateKey: { eq: "testimonials" } }
//             ) {
//               id
//               frontmatter {
//                 testimonials {
//                   body
//                   company
//                   image
//                   name
//                 }
//               }
//             }
//           }
//         `}
//         render={(data) => {
//           if (data.markdownRemark.frontmatter.testimonials) {
//             return data.markdownRemark.frontmatter.testimonials.map(
//               (testimonial, i) => (
//                 <Column key={i} size="4" slide>
//                   <TestimonialItem
//                     name={testimonial.name}
//                     body={testimonial.body}
//                     image={testimonial.image}
//                     company={testimonial.company}
//                   />
//                 </Column>
//               ),
//             )
//           }
//           return null
//         }}
//       />
//     </Row>
//     {cta && (
//       <Row>
//         <Column size="12">
//           <Button href={cta.url || cta.link} primary>
//             {cta.text}
//           </Button>
//         </Column>
//       </Row>
//     )}
//   </SectionContainer>
// )

export default TestimonialsSection
