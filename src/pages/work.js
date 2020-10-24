import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

const Resume = () => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | Avikam Mangla</title>
          <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS, Avikam Mangla DPSRKP, avikammangla  "/>
        </Helmet>
        
        <nav className="navbar mx-6 mt-4 pb-6" role="navigation" aria-label="main navigation">
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
                <a class="navbar-item" activeClassName="navbar-item" href="http://blog.avikammangla.co/">
                    Blog
                </a>
                </div>
            </div>
        </nav>

        <h1 class="title is-1 has-text-centered">Work</h1>

        {/* <div class="columns is-mobile is-centered">
        <div class="column is-half">
            <img id="myimage" src="https://avatars0.githubusercontent.com/u/24971199?s=400&u=c81b9b01013e9dcf731a2ce8bea03768f2ee6341&v=4"/>
        </div>
        </div> */}


    </div>
)

export default Resume
