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
          <title>Avikam Mangla</title>
        </Helmet>
        <nav className="navbar mx-6 mt-4 mb-6 pb-6" role="navigation" aria-label="main navigation">
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
                <a class="navbar-item" activeClassName="navbar-item" href="http://blog.avikammangla.co/">
                    Blog
                    </a>
            
                    <Link class="navbar-item" to="/resume" activeClassName="navbar-item">
                    Resume
                    </Link>
                </div>
            </div>
        </nav>

        <h1 class="title is-1 ml-6">Coming Soon</h1>


    </div>
)

export default Resume
