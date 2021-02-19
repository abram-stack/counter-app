import React, { Component } from 'react'

// stateless Functional Component
// we can destructuring the props passed, instead of using this.props.totalCounters
const NavBar = ({totalCounters}) => {

  return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
          </a>
        </div>
      </nav>
    );
}


export default NavBar;
