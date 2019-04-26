import React from 'react'
import classNames from 'classnames'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'
import Emoji from '../components/Emoji'
import SectionContainer from '../components/SectionContainer'

import { Row, Column } from '../components/Global'

const FeaturesRow = styled(Row)`
  .features-sidebar {
    list-style: none;
  }
  .features-sidebar-item {
    font-size: var(--font-title);
    font-weight: bold;
    margin-bottom: 3rem;

    a {
      color: var(--text-grey);
    }

    &.selected a {
      color: var(--text-black);
    }
  }
  .feature-tab {
    opacity: 0;
    overflow: hidden;
    visibility: hidden;
    height: 0;
    transition: all 0.3s;

    h3 {
      font-size: var(--font-subheader);
      font-weight: bold;
      margin-bottom: 1rem;
      line-height: 1.5rem;
    }

    p {
      font-size: var(--font-body);
      padding-left: 0;
      margin-bottom: 2rem;
    }

    &.active {
      opacity: 1;
      visibility: visible;
      height: auto;
      overflow: inherit;
    }
  }

  .tab-header {
    width: 100%;
    display: none;
    justify-content: space-between;
    font-size: var(--font-title);
    font-weight: bold;
    margin-bottom: 2rem;
    border-bottom: 1px solid #e7e7e7;
    padding-bottom: 1rem;
    &:hover,
    &:focus {
      text-decoration: none;
    }
    i {
      font-size: var(--font-subheader);
      top: 8px;
    }
  }

  .tag {
    display: block;
    width: 40px;
    position: relative;
    background-color: var(--blue);
    color: var(--light);
    padding: 0 0.3rem;
    text-transform: uppercase;
    font-size: var(--font-caption);
    padding-top: 3px;
    line-height: 2;
    margin-top: 1rem;
  }

  .tag:after {
    content: "";
    border-color: transparent var(--blue);
    border-style: solid;
    border-width: 13px 0px 12px 13px;
    height: 0px;
    width: 0px;
    position: absolute;
    right: -13px;
    top: 0;
  }

  @media only screen and (max-width: 767px) {
    .features-sidebar {
      display: none;
    }

    .tab-header {
      display: flex;
    }
  }
`

const DescriptionCol = styled(Column)`
  font-size: var(--font-subheader);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-grey);
`

class FeaturesTabs extends React.Component {
  state = {
    tabIndex: 0,
  }

  setIndex = (e, i) => {
    e.preventDefault()
    this.setState({ tabIndex: i })
  }

  setIndexMobile = (e, i) => {
    const { tabIndex } = this.state
    e.preventDefault()
    this.setState({ tabIndex: i })
    if (i === tabIndex) {
      return this.setState({ tabIndex: null })
    }
    return this.setState({ tabIndex: i })
  }

  render() {
    const { tabIndex } = this.state
    const { title } = this.props
    return (
      <SectionContainer
        {...this.props}
        style={{ justifyContent: 'flex-start' }}
      >
        <StaticQuery
          query={graphql`
            query Features {
              allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "features" } } }
              ) {
                edges {
                  node {
                    html
                    rawMarkdownBody
                    frontmatter {
                      title
                      items {
                        icon
                        title
                        body
                        pro
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ allMarkdownRemark: { edges } }) => (
            <FeaturesRow>
              <Column size="4">
                <ul className="features-sidebar">
                  {edges.map((s, i) => (
                    <li
                      key={i}
                      className={classNames('features-sidebar-item', {
                        selected: tabIndex === i,
                      })}
                    >
                      <a href="#" onClick={e => this.setIndex(e, i)}>
                        {tabIndex === i && <span>→</span>}
                        {s.node.frontmatter.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Column>
              <Column size="8">
                {edges.map((s, i) => (
                  <>
                    <a
                      className="tab-header"
                      href="#"
                      onClick={e => this.setIndexMobile(e, i)}
                    >
                      {s.node.frontmatter.title}
                      {' '}
                      <i
                        className={classNames({
                          'icon-drop_down': i !== tabIndex,
                          'icon-drop_up': i === tabIndex,
                        })}
                      />
                    </a>
                    <Row
                      key={i}
                      className={classNames('feature-tab', {
                        active: tabIndex === i,
                      })}
                    >
                      <DescriptionCol size="12">
                        {s.node.rawMarkdownBody}
                      </DescriptionCol>
                      {s.node.frontmatter.items.map((item, y) => (
                        <Column size="6" key={y} className="feature-item">
                          <h3>
                            <Emoji
                              emoji={item.icon}
                              size={2}
                              style={{ marginRight: '.5rem' }}
                            />
                            {' '}
                            {item.title}
                          </h3>
                          <p>
                            {item.body}
                            {/* <div className="tag">pro</div> */}
                          </p>
                        </Column>
                      ))}
                    </Row>
                  </>
                ))}
              </Column>
            </FeaturesRow>
          )}
        />
      </SectionContainer>
    )
  }
}

export default FeaturesTabs
