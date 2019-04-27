import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

const spread = (props) => {
  if (props.spread) {
    return css`
      justify-content: space-between;
      align-items: center;
    `
  }
  return css``
}

export const Container = styled.div`
  width: 100%;
  padding-right: ${props => (props.unpadded ? '0' : '1rem')};
  padding-left: ${props => (props.unpadded ? '0' : '1rem')};
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  ${spread}
`

const scroll = (props) => {
  if (props.scrolling) {
    return css`
      display: flex;
      overflow-x: scroll;
      width: auto;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      -webkit-overflow-scrolling: touch;
      margin-left: -2rem;
      margin-right: -2rem;
      scroll-snap-type: x mandatory;
      &::-webkit-scrollbar {
        display: none;
      }
    `
  }
  return css``
}

export const Row = styled.div`
  /* margin-right: -15px;
  margin-left: -15px; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${props => (props.gap ? props.gap : '1rem')};
  max-width: 960px;
  @media (max-width: 768px) {
    ${scroll};
  }
`

Row.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scrolling: PropTypes.bool,
}

const slide = (props) => {
  if (props.slide) {
    return css`
      min-width: 300px;
      padding: 0.5rem;
      scroll-snap-align: center;
    `
  }
  return css``
}

const alignTextColumn = (props) => {
  if (props.textCenterMobile) {
    return 'center'
  }
  if (props.textCenter) {
    return 'center'
  }
  return 'inherit'
}

export const Column = styled.div`
  grid-column: ${props => (props.offset > 1
    ? `${props.offset} / span ${props.size}`
    : `span ${props.size}`)};

  text-align: ${props => (props.textCenter ? 'center' : 'left')};

  @media (max-width: 768px) {
    grid-column: span ${props => props.mobile};
    text-align: ${props => alignTextColumn(props)};
    ${slide}
  }
`

Column.defaultProps = {
  size: 12,
  mobile: 12,
  offset: 1,
}
