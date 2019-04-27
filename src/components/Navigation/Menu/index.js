import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import NavContainer from './NavContainer'
import Button from '../../Button'
import { Container, Row, Column } from '../../Global'

const SubMenu = styled.section`
  padding: 4rem 0;
  a {
    display: block;
    margin-bottom: 1rem;
  }
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.dropdown = React.createRef()
    this.toggler = React.createRef()
    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = (event) => {
    if (
      this.dropdown.current
      && !this.dropdown.current.contains(event.target)
    ) {
      if (this.toggler.current.contains(event.target)) {
        return null
      }
      return this.setState({ open: false })
    }
    return null
  }

  toggleMenu = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render() {
    const {
      onMenuClick, menuItems, logo, mobileLogo, cta,
    } = this.props
    const { open } = this.state
    return (
      <>
        <NavContainer>
          <Container unpadded spread>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="apical-logo" />
              <img
                src={mobileLogo || logo}
                alt="apical-logo"
                className="mobile-logo"
              />
            </Link>

            <div className="nav-center nav-items">
              {menuItems.map((m, i) => (
                <Link key={i} to={m.url} activeClassName="active">
                  {m.text}
                </Link>
              ))}
            </div>
            <div className="nav-items">
              {cta && (
                <Button
                  outline
                  href={cta.url}
                  icon="arrow"
                  style={{ minWidth: '6rem', padding: '.5rem 1rem' }}
                >
                  {cta.text}
                </Button>
              )}
            </div>

            {/* <h2 className="mobile-menu">HAPPINESS IS A MOVEMENT</h2> */}
            <div className="right mobile-menu">
              <a href="#" onClick={e => onMenuClick(e)}>
                <i className="icon-menu" />
              </a>
            </div>
          </Container>
        </NavContainer>
        {open && (
          <SubMenu ref={this.dropdown}>
            <Container>
              <Row>
                <Column size="3">
                  <Link to="/create/travel">Travel</Link>
                  <Link to="/create/festival">Festival</Link>
                  <Link to="/create/event">Event</Link>
                </Column>
                <Column size="3">
                  <Link to="/create/nature">Nature</Link>
                  <Link to="/create/sport">Sport</Link>
                </Column>
              </Row>
            </Container>
          </SubMenu>
        )}
      </>
    )
  }
}

// export default withRouter(Menu);
export default Menu
