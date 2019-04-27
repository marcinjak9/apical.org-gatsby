import React from 'react'
import { Link } from 'gatsby'

const LinkWrapper = (props) => {
  const { to, children } = props
  if (to && to.includes('http')) {
    return (
      <a {...props} href={to}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  )
}

export default LinkWrapper
