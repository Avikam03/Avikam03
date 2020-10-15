import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

import image from "../images/media/undraw_coding_6mjf.svg"
import siteicon from "../images/media/favicon.ico"



const IndexPage = () => (
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
          <a class="navbar-item" activeClassName="navbar-item" target="_blank" href="http://blog.avikammangla.co/">
              Blog
            </a>
      
            <Link class="navbar-item" to="/resume" activeClassName="navbar-item">
              Resume
            </Link>
        </div>
      </div>
    </nav>

    <section class="section mb-6 pt-6 mt-6 pb-6">
    <div class="container">
      <h1 class="title is-1 mt-3 pb-6 ml-5">
        Hey There! 👋 I'm Avikam Mangla, a 17 year old programmer from New Delhi.
      </h1>
    </div>
    </section>

    <section class="section">
    <div class="columns is-multiline mx-6 pt-6 mt-6">
        <div class="column is-half mr-5">
          <div class="content is-medium">
            <h2 class = "title is-1 mt-2">About</h2>
            <p>I'm Avikam, a High School Senior at Delhi Public School  R K Puram.</p>
            <p>I love creating things, and most importantly, putting my skills to good use.</p>
            <p>Over the summer vacations, I taught myself how to develop web applications. Ever since, I've made over a dozen web applications, and am really enjoying being a part of the developer community.</p>
          </div>
        </div>
        <div class="column ml-6">
            <img src={image} height="6  00" width="700" />
        </div>
    </div>
    </section>

      <section class="section mb-1 mt-6">
      <div class="container">
        <center>
          <h1 class="title is-1 mt-6" id="heading">
            Stuff about me
          </h1>
          <p class="subtitle">
            Adding this so my website doesn't look blank lol 
          </p>
        </center>

        <section class="section">
          <div class="columns is-multiline mx-6 pt-6">
              <div class="column is-half mr-6">
                <h1 class="title is-2 ">
                  <img src="https://img.icons8.com/color/48/000000/books.png"/>
                  Education
                </h1>
                <h1 class="title is-4">
                  Delhi Public School R K Puram - Class of 2021
                </h1>
                <h1 class="subtitle is-6">
                    Class 11 & 12 - Physics, Mathematics, Chemistry, Computer Science, English
                    <h1 class="title is-5 mt-3">
                      <strong>Activities and Socities:</strong>
                    </h1>
                    <h1 class="subtitle is-6">
                      <ul>
                        <li><strong>President</strong>, The Entrepreneurship Club (Enship) - 2019-2021</li>
                        <li><strong>Member</strong>, Student Council - 2019-2020</li>
                      </ul>
                    </h1>  
                </h1>
                <h1 class="title is-4 mt-3">
                  Previous Schools:
                </h1>
                <ul class="subtitle is-6">
                    <li>G D Goenka Public School (2016-2019)</li>
                    <li>Anglo Chinese School Independent (2016-2016)</li>
                    <li>Global Indian International School, Singapore (2007-2015)</li>
                </ul>
                <h1 class="title is-4 mt-3">
                  Standardised Test Scores
                </h1>
                <ul class="subtitle is-6">
                  <li>SAT: 1510 Superscore (EBRW- 710, Math- 800)</li>
                  <li>AP Calculus BC: 5</li>
                  <li>AP Computer Science: 4</li>
                </ul>
              </div>
              <div class="column ml-5">
                <h1 class="title is-2">
                  <img src="https://img.icons8.com/fluent/48/000000/work.png"/>
                  Skills
                </h1>
                <h1 class="title is-4 mt-3">
                  Web Development &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Python, Javascript, HTML, CSS</p>
                <h1 class="title is-4 mt-3">
                  Mobile App Development &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Android, Java</p>
                <h1 class="title is-4 mt-3">
                  Programming &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Python, Javascript, Java, C++</p>
                <h1 class="title is-4 mt-3">
                  Design &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Photoshop, Illustrator,Premiere Pro, GIMP</p>
                <h1 class="title is-4 mt-3">
                  Others &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Git, MySQL, LaTeX, </p>
              </div>
          </div>
        </section>
      </div>
    </section>

    <footer class="footer">
    <div class="content has-text-centered">
      <p>
      </p>
      <p>
        <a href="https://www.github.com/avikam03" target="_blank"><img src="https://img.icons8.com/material-sharp/48/000000/github.png"/></a>
        <a href="https://www.instagram.com/avikammangla" target="_blank"><img src="https://img.icons8.com/windows/48/000000/instagram-new.png"/></a>
        <a href="https://www.linkedin.com/in/avikammangla" target="_blank"><img src="https://img.icons8.com/windows/48/000000/linkedin-2.png"/></a>
        <a href="mailto:avikam03@gmail.com" target="_blank"><img src="https://img.icons8.com/material-outlined/48/000000/important-mail.png"/></a>
      </p>
    </div>
  </footer>

  </div>


)

export default IndexPage
