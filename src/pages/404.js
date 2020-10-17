import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'
import siteicon from "../images/media/favicon.ico"


const NotFoundPage = () => (
    <div>
        <Helmet>
        <meta charset="utf-8" />
        <meta name="description"
          content="Avikam Mangla | High School Senior | Developer "
        />
        <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS   "/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <title>Avikam Mangla!</title>
        <link rel="shortcut icon" href={siteicon} />
        </Helmet>
        <div class="columns is-desktop is-vcentered mt-3">
          <div class="column">
              <h1 class="title is-1 has-text-centered">404 Error</h1>
              <h2 class="subtitle is-4 has-text-centered">This Page was not found. </h2>
              <h3 class="subtitle is-4 has-text-centered">Go <Link to="/">Home</Link></h3>
          </div>
        </div>
        


    </div>
)

export default NotFoundPage
