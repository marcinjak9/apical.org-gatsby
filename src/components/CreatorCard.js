/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import styled from '@emotion/styled'
import BadgeTag from './BadgeTag'
import { rawImageLink } from './image'

const Card = styled.div`
  background-color: var(--grey-bg);
  position: relative;
  margin-bottom: 2rem;
  transition: all 0.3s;
  padding-bottom: 30px;
  /* height: 100%; */

  &:hover {
    box-shadow: 8px 14px 38px rgba(39, 44, 49, 0.06),
      1px 3px 8px rgba(39, 44, 49, 0.03);
  }

  header {
    min-height: 340px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0;
    background-color: var(--darkgray);
    border: none;
    border-radius: 0;
    background-image: url(${props => rawImageLink(props.image, { resize: '500' })});
    cursor: pointer;
  }

  .comingsoon {
    color: var(--blue);
    font-size: var(--font-body-secondary);
    font-weight: bold;
  }

  .body {
    padding: 2rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: var(--font-subheader);
      font-weight: bold;
    }

    p {
      padding: 0;
      font-size: var(--font-body-secondary);
    }

    .action {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      bottom: 10px;
      right: 20px;

      a {
        color: var(--text-grey);
        text-decoration: underline;

        &.with-icon,
        &.with-icon:hover {
          text-decoration: none;
          color: var(--blue);
        }
      }
    }
  }
`

const CreatorCard = ({
  image, name, tag, excerpt, onPlusClick, url,
}) => (
  <Card image={image}>
    <a href={url}>
      <header>{tag && <BadgeTag>{tag}</BadgeTag>}</header>
    </a>
    <div className="body">
      <div>
        <h4>{name}</h4>
        <p>{excerpt}</p>
      </div>
      <div className="action">
        {url ? (
          <a className="with-icon" href={url}>
            {/* <span className="icon-add" /> */}
            <i className="icon-link" />
          </a>
        ) : (
          <span className="comingsoon">Coming soon</span>
        )}
      </div>
    </div>
  </Card>
)

export default CreatorCard
