import React from 'react'
import styled from '@emotion/styled'
import Image from './image'

const Testimonial = styled.div`
  border-left: 1px solid #fff;
  border-color: var(--lightgrey);
  padding: 1rem;
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2rem;
  }

  .title {
    color: var(--text-grey);
  }

  h4 {
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: var(--font-title);
    line-height: 1.8rem;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  p.testimonial-body {
    font-size: var(--font-body);
  }
`

const TestimonialItem = ({
  name, body, image, company,
}) => (
  <Testimonial>
    <header>
      <div className="title">
        <h4>{name}</h4>
        <small>{company}</small>
      </div>
      <Image src={image} resize="120" alt={name} className="avatar" />
    </header>

    <p className="testimonial-body">{body}</p>
  </Testimonial>
)

export default TestimonialItem
