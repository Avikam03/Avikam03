import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"

// import 'react-bulma-components/dist/react-bulma-components.min.css'
import '../static/styles/styles.css'
import '../static/styles/bulma.css'

import siteicon from "../images/media/favicon.ico"
import Navbar from "../components/navbar"



const Resume = () => (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Avikam Mangla</title>
          <meta name="keywords" content="Avikam, Mangla, Avikam Mangla, Enship, Dpsrkp, DPS, Avikam Mangla DPSRKP, avikammangla  "/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link rel="shortcut icon" href={siteicon} />
        </Helmet>
        
      
        <Navbar/>

        <h1 class="title is-1 has-text-centered">About</h1>

        <div id="myimagediv">
            <img id="myimage" src="https://i.ibb.co/ssWJgkx/IMG-5814.jpg"/>
        </div>

        <section class="section mt-6 pt-6">
            <div class="columns is-multiline mx-6">
                <div class="column has-text-centered">
                    <div class="content is-large">
                    <p>I'm <strong>Avikam Mangla</strong>, a High School Senior at Delhi Public School  R K Puram. I love creating things, and most importantly, putting my skills to good use. Over the summer vacations, I taught myself how to develop web applications. Ever since, I've made over a dozen web applications, and am really enjoying being a part of the developer community.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section mb-1 ">
        <div class="container">
          <center>
            <h1 class="title is-1" id="heading">
              Stuff about me
            </h1>
            <p class="subtitle">
              Adding this so this page doesn't look blank lol 
            </p>
          </center>

        <section class="section mt-3">
          {/* <div class="columns is-multiline mx-6 pt-6"> */}
          <div class="columns is-multiline">
              {/* <div class="column is-half mr-6"> */}
              <div class="column is-narrow"></div>
              <div class="column is-narrow"></div>
              <div class="column is-narrow"></div>
              <div class="column is-narrow"></div>
              <div class="column is-half">
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
                  <strong>Activities and Socities</strong>
                </h1>
                <h1 class="subtitle is-5">
                  <ul>
                    <li><strong>President</strong>, The Entrepreneurship Club (Enship)</li>
                    <li><strong>Member</strong>, Student Council - 2019-2020</li>
                  </ul>
                </h1>  
                <h1 class="title is-4 mt-3">
                  School Grades
                </h1>
                <ul class="subtitle is-6">
                    <li>Class 12 [Predicted]: 96.8% | Class 11: 83.6%</li>
                    <li>Class 10: 96.4% | Class 9: 90.1%</li>
                </ul>
                
                <h1 class="title is-4 mt-3">
                  Standardised Test Scores
                </h1>
                <ul class="subtitle is-6">
                  <li>SAT: 1510/1600 Superscore (EBRW: 710, Math: 800)</li>
                  <l1>Essay: 20/24 (R: 8, A: 4, W: 8)</l1>
                  <li>AP Calculus BC: 5/5</li>
                  <li>AP Computer Science: 4/5</li>
                  <li>IELTS: 8.5/9 (R: 9, L: 9, W: 7.5, S: 7.5)</li>
                </ul>
              </div>
              {/* <div class="column ml-5"> */}
              <div class="column">
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
                <p class="subtitle">Django(Full Stack), ReactJS, NodeJS</p>
                <h1 class="title is-4 mt-3">
                  Web Design &nbsp;
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h1>
                <p class="subtitle">HTML, CSS, Javascript</p>
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

       <div class="content is-light has-text-centered pb-6 pt-6 mt-6">
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

export default Resume
