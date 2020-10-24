import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

import image from "../images/media/undraw_source_code_xx2e.svg"
import siteicon from "../images/media/favicon.ico"



const IndexPage = () => (
  <div>
    <Helmet>
    <meta charset="utf-8" />
    <meta name="description"
      content="Avikam Mangla | High School Senior | Developer "
    />
    <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS, Avikam Mangla DPSRKP, avikammangla  "/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <title>Home | Avikam Mangla</title>
    <link rel="shortcut icon" href={siteicon} />
          
    </Helmet>


    <nav className="navbar mx-6 mt-4 mb-4 pb-6" role="navigation" aria-label="main navigation">
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
            <a class="navbar-item" activeClassName="navbar-item" target="_blank" href="http://blog.avikammangla.co/">
              Blog
            </a>
        </div>
      </div>
    </nav>

    <section class="section">
    <div class="columns is-multiline mx-6 mb-6">
        <div class="column is-half ">
          <div class="content is-large">
            <h1 id= "myname">Avikam</h1>
            <p class = "subtitle is-2">Hey There! I'm a 17 year old programmer from New Delhi.</p>
            {/* <p class = "title is-1 mt-2">Hey There!</p>
            <p class = "subtitle is-2">I'm <strong>Avikam Mangla</strong>, a 17 years-old programmer from New Delhi.</p> */}
          </div>
        </div>
        <div class="column ml-6">
            <img src={image} height="6  00" width="700" />
        </div>
    </div>
    </section>

  </div>


)

export default IndexPage
