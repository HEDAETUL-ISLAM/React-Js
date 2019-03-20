import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";



class Header extends Component{

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Portfolio</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link
                                    className="nav-link"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    style={{ cursor:"pointer"}}>
                                 about
                                </Link>
                            </li>
                            <li class="nav-item active">
                                <Link
                                    className="nav-link"
                                    to="skill"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    style={{ cursor: "pointer" }}>
                                    skill
                                </Link>
                            </li>
                            
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li> */}
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li> */}
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                        
                    </div>
                    </nav>
            </div>
        )
    }
}
export default Header;