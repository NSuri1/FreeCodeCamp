import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import blackberryLogo from '../../assets/images/experience/blackberry-logo.jpg'
import ciaraLogo from '../../assets/images/experience/ciara-logo.jpg'
import ultimateLogo from '../../assets/images/experience/ultimate-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            colour='#FFFFFF'
            title='Ultimate Software'
            position='Software Engineering Intern'
            logo={ultimateLogo}
            link='#'
            timeperiod='Jan 2018 - Apr 2018'
            subtitle=''
          />
          <ExperienceUnit
            colour='#FFFFFF'
            title='CIARA at FIU'
            position='NSF Software Defined Networking Fellow'
            logo={ciaraLogo}
            link='#'
            timeperiod='June 2017 - Dec 2017'
            subtitle=''
          />
          <ExperienceUnit
            colour='#000000'
            title='BlackBerry Limited'
            position='Automation Test Developer Intern'
            logo={blackberryLogo}
            link='#'
            timeperiod='Jan 2017 - May 2017'
            subtitle=''
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
