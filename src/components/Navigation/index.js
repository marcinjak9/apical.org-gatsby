import React from 'react';
import Sidebar from './Sidebar';
import Menu from './Menu';

class Navigation extends React.Component {
  state = {
    isOpen: false,
  };

  onMenuClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Sidebar
          open={isOpen}
          onClose={() => this.setState({ isOpen: false })}
        />
        <Menu onMenuClick={this.onMenuClick} />
      </>
    );
  }
}

export default Navigation;
