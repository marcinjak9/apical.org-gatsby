import React from 'react'
import styled from '@emotion/styled'
import Link from '../../LinkWrapper'
import NavContainer from './NavContainer'
import Button from '../../Button'
import { Container, Row, Column } from '../../Global'
import LanguageSelection from './LanguageSelection'

const SubMenu = styled.section`
  padding: 4rem 0;
  a {
    display: block;
    margin-bottom: 1rem;
  }
`

const Powered = styled.p`
  color: #16385a;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  word-spacing: -1px;
  margin-left: 54px;
  margin-top: -8px;

  img {
    height: 23px;
    margin-top: -4px;
    /* margin-left: -2px; */
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const LoginButton = styled.span`
  a {
    color: var(--blue);
    font-weight: bold;
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
      onMenuClick,
      menuItems,
      logo,
      mobileLogo,
      cta,
      powered,
    } = this.props
    const { open } = this.state
    return (
      <>
        <NavContainer>
          <Container unpadded spread>
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="apical-logo" />
              <img src={mobileLogo} alt="apical-logo" className="mobile-logo" />
              {powered && (
                <Powered>
                  powered by
                  <img
                    src="https://apical.it/skin/frontend/ultimo/default/images/apical-logo.png"
                    alt="logo"
                  />
                </Powered>
              )}
            </Link>
            <div className="right mobile-menu">
              <div className="nav-items cta-menu">
                {cta && (
                  <>
                    <!--<Button
                      outline
                      href={cta.url}
                      icon="arrow"
                      style={{ minWidth: '6rem', padding: '.5rem 1rem' }}
                    >
                      {cta.text}
                    </Button>-->
                    <Button
                      primary
                      href="https://dashboard.apical.org/login"
                      icon="arrow"
                      style={{
                        minWidth: '6rem',
                        padding: '.5rem 1rem',
                        marginLeft: '1rem',
                      }}
                    >
                      Login
                    </Button>
                  </>
                )}
              </div>
              <div>
                <a href="#" onClick={e => onMenuClick(e)}>
                  <i className="icon-menu" />
                </a>
                <LanguageSelection />
              </div>
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
