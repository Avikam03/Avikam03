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


    <section class="section hero is-light mt-6 pt-6">
    <div class="columns is-multiline mx-6">
        <div class="column has-text-centered">
          <h2 class = "title is-1">About</h2>
          <div class="content is-medium">
            <p>I'm Avikam, a High School Senior at Delhi Public School  R K Puram. I love creating things, and most importantly, putting my skills to good use. Over the summer vacations, I taught myself how to develop web applications. Ever since, I've made over a dozen web applications, and am really enjoying being a part of the developer community.</p>
            {/* <p>I love creating things, and most importantly, putting my skills to good use.</p>
            <p>Over the summer vacations, I taught myself how to develop web applications. Ever since, I've made over a dozen web applications, and am really enjoying being a part of the developer community.</p> */}
          </div>
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
                <p class="title is-2 ">
                  <img src="https://img.icons8.com/color/48/000000/books.png"/>
                  Education
                </p>
                <h1 class="title is-4">
                  Delhi Public School R K Puram - Class of 2021
                </h1>
                <h1 class="subtitle is-6">
                    Class 12 & 11 - Physics, Mathematics, Chemistry, Computer Science, English
                </h1>
                <h1 class="title is-4 mt-3">
                  <strong>Activities and Socities:</strong>
                </h1>
                <h1 class="subtitle is-5">
                  <ul>
                    <li><strong>President</strong>, The Entrepreneurship Club (Enship)</li>
                    <li><strong>Member</strong>, Student Council - 2019-2020</li>
                  </ul>
                </h1>  
                <h1 class="title is-4 mt-3">
                  School Percentage %:
                </h1>
                <ul class="subtitle is-6">
                    <li>Class 12: 96.8% | Class 11: 83.6%</li>
                    <li>Class 10: 96.4% | Class 9: 90.1%</li>
                </ul>
                {/* <h1 class="title is-4 mt-3">
                  Previous Schools:
                </h1>
                <ul class="subtitle is-6">
                    <li>G D Goenka Public School (2016-2019)</li>
                    <li>Anglo Chinese School Independent (2016-2016)</li>
                    <li>Global Indian International School, Singapore (2007-2015)</li>
                </ul> */}
                <h1 class="title is-4 mt-3">
                  Standardised Test Scores
                </h1>
                <ul class="subtitle is-6">
                  <li>SAT: 1510 Superscore (EBRW: 710, Math: 800)</li>
                  <li>AP Calculus BC: 5</li>
                  <li>AP Computer Science: 4</li>
                  <li>IELTS: 8.5 (R: 9, L: 9, W: 7.5, S: 7.5)</li>
                </ul>
              </div>
              <div class="column ml-5">
                <p class="title is-2">
                  <img src="https://img.icons8.com/fluent/48/000000/work.png"/>
                  Skills
                </p>
                <h1 class="title is-4 mt-3">
                  Web Development &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">Django(Full Stack), ReactJS, ExpressJS, HTML, CSS</p>
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
                <p class="subtitle">Git, MySQL, LaTeX</p>
              </div>
          </div>
        </section>
      </div>
    </section>

    <div class="content hero is-light has-text-centered pb-6 pt-6 mt-6">
      <p id="sociallinks">
        <a class="fa fa-github mr-1 ml-1" href="https://www.github.com/avikam03"></a>
        <a class="fa fa-linkedin mr-1 ml-1" href="https://www.linkedin.com/in/avikammangla"></a>
        <a class="fa fa-envelope mr-1 ml-1" href="mailto:avikam03@gmail.com"></a>
        <a class="fa fa-facebook mr-1 ml-1" href="facebook.com/avikammangla"></a>
        <a class="fa fa-instagram mr-1 ml-1" href="https://www.instagram.com/avikammangla"></a>
        
      </p>
    </div>
  </div>


)

export default IndexPage
