import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
  <div className="index">
    <div className="aside">
      <div className="top">
        <About />
      </div>
      <div className="bottom">
        <Links />
      </div>
    </div>

    <div className="main">
      <h5>
        Hi, I'm <span className="bold">Nalin Suri</span>
      </h5>

      <h3 className="bold">
        Software Developer and Computer Science Major at Florida International University.
      </h3>

      <ExperienceSection />
      {/* <ProjectsSection /> */}
    </div>
  </div>
)

export default IndexPage
