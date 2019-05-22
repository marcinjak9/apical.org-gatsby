import React from 'react'
import styled from '@emotion/styled'
import BadgeTag from './BadgeTag'
import { rawImageLink } from './image'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 800px;
  background-color: #fff;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 4px;
  position: relative;
  height: 100%;

  .close {
    background: none;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

    i {
      font-size: var(--font-body);
      padding: 1rem;
    }
  }

  .image,
  .body {
    flex: 1;
    min-width: 400px;
  }

  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .body {
    padding: 4rem 2rem 0 2rem;
    h3 {
      font-size: var(--font-title);
    }

    p {
      font-size: var(--font-body);
    }

    small {
      color: var(--text-grey);
    }

    .modal-cta {
      margin-top: 4rem;
      margin-bottom: 2rem;
      a {
        color: var(--blue);
      }
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 100%;
    margin: 1rem;

    .close {
      color: var(--blue);
    }

    .image,
    .body {
      min-width: 100%;
    }

    .image {
      min-height: 300px;
    }

    .body {
      padding: 2rem;

      .modal-cta {
        margin-bottom: 0;
        margin-top: 3rem;
      }
    }
  }
`

const CreatorCardBig = ({
  tag,
  title,
  body,
  url,
  image,
  closeModal,
  tagline,
}) => (
  <Card>
    <button className="close" type="button" onClick={closeModal}>
      <i className="icon-close" />
    </button>
    <div
      className="image"
      style={{
        backgroundImage: `url(${rawImageLink(image, { resize: '700' })})`,
      }}
    />
    {tag && <BadgeTag>{tag}</BadgeTag>}
    <div className="body">
      <h3>{title}</h3>
      <p>{body}</p>
      {tagline && <small>{tagline}</small>}
      <div className="modal-cta">
        {url && (
          <a href={url}>
            Visit website
            {' '}
            <i className="icon-link" />
          </a>
        )}
      </div>
    </div>
  </Card>
)

export default CreatorCardBig
