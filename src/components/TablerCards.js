/* eslint-disable react/destructuring-assignment */
import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import SimpleCard from './SimpleCard';
import { Row, Column } from './Global';

const Navigation = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;

  li {
    a {
      color: var(--text-grey);
      font-size: var(--font-body);
      font-weight: bold;
    }

    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
    }

    &.active {
      a {
        color: var(--blue);
      }
    } 
  }
`;

const Content = styled.div`
  margin: 2rem 1rem 2.5rem 1rem;
  position: relative;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  .card {
    p {
      font-size: var(--font-body);
    }
    .features {
      margin-top: 2.5rem;
      color: var(--text-grey);
      .title {
        margin-bottom: 1rem;
      }
      p {
        font-size: var(--font-body-secondary);
        line-height: 2rem;
      }
    }

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    transition: all 0.3s;
    opacity: 0.5;

    &.active {
      position: relative;
      z-index: 30;
      opacity: 1;
      margin: 0 auto;
    }
  }

  p.body {
    text-align: left;
  }
`;

class TablerCards extends React.Component {
  state = {
    selectedFeature: this.props.items[Math.round(this.props.items.length/2)].title,
  };

  onFeatureClick = (e, feature) => {
    e.preventDefault();
    this.setState({ selectedFeature: feature.title });
  };

  render() {
    const { items, titleSize } = this.props;
    const { selectedFeature } = this.state;
    return (
      <Row>
        <Column size="6" offset="4">
          <Navigation>
            {items.map(feature => (
              <li
                key={feature.title}
                className={classNames({
                  active: selectedFeature === feature.title,
                })}
              >
                <a href="#" onClick={e => this.onFeatureClick(e, feature)}>
                  {feature.nav || feature.title}
                </a>
              </li>
            ))}
          </Navigation>

          <Content>
            {items.map((feature, i) => (
              <a
                href="#"
                className="no-style"
                onClick={e => this.onFeatureClick(e, feature)}
                key={i}
              >
                <SimpleCard
                  sliding
                  // bodySmall
                  index={i}
                  length={items.length}
                  title={feature.title}
                  titleSize={titleSize}
                  body={feature.body}
                  image={feature.image}
                  features={feature.features}
                  active={feature.title === selectedFeature}
                  currentIndex={items.findIndex(
                    it => it.title === selectedFeature,
                  )}
                />
              </a>
            ))}
          </Content>
        </Column>
      </Row>
    );
  }
}

export default TablerCards;
