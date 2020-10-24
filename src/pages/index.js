import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

import image from "../images/media/undraw_source_code_xx2e.svg"
import siteicon from "../images/media/favicon.ico"
import Navbar from "../components/navbar"


const IndexPage = () => (
  <div>
    <Helmet>
    <meta charset="utf-8" />
    <meta name="description"
      content="I'm Avikam Mangla, A High School Senior at Delhi Public School Puram, where I'm also the President of the Entrepreneurship club- Enship.  "
    />
    <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS, Avikam Mangla DPSRKP, avikammangla  "/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <title>Home | Avikam Mangla</title>
    <link rel="shortcut icon" href={siteicon} />
          
    </Helmet>

    <Navbar/>

    <section class="section mt-6">
    <div class="columns is-multiline mx-6 mb-6 mt-3">
        <div class="column is-half ">
          <div class="content is-large">
            <h1 id= "myname">Avikam</h1>
            <p class = "subtitle is-2">Hey There! I'm a 17 year old programmer from New Delhi.</p>
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
