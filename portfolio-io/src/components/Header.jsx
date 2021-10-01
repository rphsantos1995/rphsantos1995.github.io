import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
            <h1 class="title">Welcome</h1> 
            <div class="text-muted">
              <p>Hello, im happy to see you here, this page tells a history about my journey through
              the art of development.
              </p>
            </div>
        </header>
      </div>
    );
  }
}

export default Header;