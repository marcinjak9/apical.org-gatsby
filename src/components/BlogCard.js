import React from 'react';
import styled from '@emotion/styled';
import BadgeTag from './BadgeTag';

const Wrapper = styled.div`
  background-color: var(--light);
  position: relative;
  border-radius: 4px;
  box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
    1px 3px 8px rgba(39, 44, 49, 0.03);
  overflow: hidden;
  height: 100%;
`;

const Header = styled.div`
  min-height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  background-color: var(--darkgray);
  border: none;
  border-radius: 0;
  background-image: url('${props => props.image}');
`;

const Body = styled.div`
  padding: 2rem;
  padding-bottom: 1.5rem;
  padding-top: 1rem;

  h4 {
    font-size: var(--font-subheader);
    font-weight: bold;
    line-height: 1.5rem;
  }

  p {
    padding: 0;
    font-size: var(--font-body-secondary);
  }

  small {
    color: var(--text-grey);
  }
`;

const BlogCard = ({
  image, name, body, tag, date, author, url,
}) => (
  <Wrapper>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Header image={image} />
    </a>
    <Body>
      <small>
        {date}
        {' '}
        {author}
      </small>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h4>{name}</h4>
      </a>
      <p>{body}</p>
    </Body>
  </Wrapper>
);

export default BlogCard;
