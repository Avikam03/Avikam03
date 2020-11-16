import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'



const Navbar = () => (
    <div>
        <nav className="navbar mx-6 mt-4" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link class="navbar-item" activeClassName="navbar-item" to="/">
                    <strong>AVIKAM MANGLA</strong>
                </Link>
            
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarBasicExample" class="navbar-menu">
                
            
                <div class="navbar-end"> 
                    <Link class="navbar-item" to="/about" activeClassName="navbar-item">
                    About
                    </Link>    
                    <Link class="navbar-item" to="/work" activeClassName="navbar-item">
                    Work
                    </Link>
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar
