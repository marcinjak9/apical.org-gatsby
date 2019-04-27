/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Link } from 'gatsby'
import ReactGA from 'react-ga'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const dynamicStyle = (props) => {
  let s = css``

  if (props.primary) {
    s = css`
      ${s}
      background-color: ${props.light ? 'var(--light)' : 'var(--blue)'};
      border-color: ${props.light ? 'var(--light)' : 'var(--blue)'};
      color: ${props.light ? 'var(--darkblue)' : 'var(--light)'};
      &:hover {
        color: ${props.darkBg ? 'var(--light)' : 'var(--blue)'};
        /* background-color: ${
  props.light ? 'transparent' : 'var(--darkblue)'
}; */
        background-color: transparent;
        /* border-color: ${props.light ? 'var(--light)' : 'transparent'} */
        border-color: ${props.darkBg ? 'var(--light)' : 'var(--blue)'};
      }
    `
  }
  if (props.alignStart) {
    s = css`
      ${s}
      align-self: flex-start;
    `
  }
  if (props.outline) {
    s = css`
      ${s}
      border-color: ${props.light ? 'var(--light)' : 'var(--blue)'};
      color: ${props.light ? 'var(--light)' : 'var(--blue)'};
      /* min-width: inherit; */
      /* padding: 0.5rem 1rem; */
      /* font-weight: normal; */
      /* line-height: 2rem; */
      &:hover {
        background-color: var(--blue);
        color: var(--light);
        border-color: var(--light);
      }
    `
  }
  if (props.fluid) {
    s = css`
      ${s}
      width: 100%;
      text-align: left;
      /* padding: 1.1rem 1.5rem 0.8rem 1.5rem !important; */
      i {
        float: right;
        top: 0;
      }
      span {
        margin-left: 1rem;
      }
    `
  }
  if (props.icon) {
    s = css`
      ${s} /* padding-top: .6rem; */
    `
  }
  return s
}

const StyledButton = styled.a`
  cursor: pointer;
  font-size: var(--font-body);
  /* padding: ${props => (props.icon ? '0.4rem 1rem 1.2rem 1rem' : '1rem')}; */
  padding: .8rem 1rem;
  min-width: 12rem;
  font-weight: bold;

  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-decoration: none !important;

  &:hover {
    text-decoration: none;
  }

  i {
    top: 8px;
  }

  ${dynamicStyle}
`
const StyledButtonLink = styled(Link)`
  cursor: pointer;
  font-size: var(--font-body);
  /* padding: ${props => (props.icon ? '0.4rem 1rem 1.2rem 1rem' : '1rem')}; */
  padding: .8rem 1rem;
  min-width: 12rem;
  font-weight: bold;

  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-decoration: none !important;

  &:hover {
    text-decoration: none;
  }

  i {
    top: 8px;
  }

  ${dynamicStyle}
`

// const renderIcon = (icon) => {
//   switch (icon) {
//     case 'arrow':
//       return <i className="icon-arrow_right" />
//     default:
//       return null
//   }
// }

const buttonClick = (e, track, onClick) => {
  if (track) {
    ReactGA.event({
      category: 'cta',
      action: 'click',
      label: e.target.innerText,
    })
    if (window && window.fbq) {
      window.fbq('trackCustom', 'ClickCTA', { name: e.target.innerText })
    }
  }
  if (onClick) {
    onClick(e)
  }
}

const Button = (props) => {
  if (props.button || (props.href && props.href.includes('#'))) {
    return (
      <StyledButton
        {...props}
        onClick={e => buttonClick(e, true, props.onClick)}
      >
        {props.children}
        {/* {props.icon && renderIcon(props.icon)} */}
      </StyledButton>
    )
  }
  if (props.external || (props.href && props.href.includes('http'))) {
    return (
      <StyledButton {...props} href={props.href}>
        {props.children}
        {/* {props.icon && renderIcon(props.icon)} */}
      </StyledButton>
    )
  }
  return (
    <StyledButtonLink to={props.href} {...props} onClick={e => buttonClick(e)}>
      {props.children}
      {/* {props.icon && renderIcon(props.icon)} */}
    </StyledButtonLink>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  alignStart: PropTypes.bool,
}

export default Button
