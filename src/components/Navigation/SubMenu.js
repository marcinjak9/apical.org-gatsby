import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class SubMenu extends Component {
  state = {
    open: false,
  };

  toggleOpen = (e) => {
    e.preventDefault();
    return this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;
    return (
      <li>
        <a href="#" onClick={this.toggleOpen}>
          <i className="icon-arrow_right" />
          Create
        </a>
        {open && (
          <ul className="sub-menu">
            <li>
              <Link href="/create/travel">
                <a>Travel</a>
              </Link>
            </li>
            <li>
              <Link href="/create/festival">
                <a>Festival</a>
              </Link>
            </li>
            <li>
              <Link href="/create/event">
                <a>Event</a>
              </Link>
            </li>
            <li>
              <Link href="/create/nature">
                <a>Nature</a>
              </Link>
            </li>
            <li>
              <Link href="/create/sport">
                <a>Sport</a>
              </Link>
            </li>
          </ul>
        )}
      </li>
    );
  }
}
