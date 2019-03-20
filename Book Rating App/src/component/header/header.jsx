import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo center" >Book Rating</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            {/* <li><a href="collapsible.html">JavaScript</a></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;

