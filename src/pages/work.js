import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

import Navbar from "../components/navbar"


const Resume = () => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Work | Avikam Mangla</title>
          <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS, Avikam Mangla DPSRKP, avikammangla  "/>
        </Helmet>
        
        <Navbar/>

        <h1 class="title is-1 has-text-centered">Work</h1>

    </div>
)

export default Resume
