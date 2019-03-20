import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Book Rating App</a>
                <ul className="right hide-on-med-and-down">                 
                    {this.props.navigations.map(e=><li><a>{e.name}</a></li> )}
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Header
