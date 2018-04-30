import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={null}
            colour="#FFFFFF"
            title="Proj1"
            link="https://www.google.com/"
            timeperiod="2017 - ???"
            subtitle="Project where I did this thing"
          />
          <ExperienceUnit
            logo={null}
            colour="#FFFFFF"
            title="Proj1"
            link="https://www.google.com/"
            timeperiod="2017 - ???"
            subtitle="Project where I did this thing"
          />
          <ExperienceUnit
            logo={null}
            colour="#FFFFFF"
            title="Proj1"
            link="https://www.google.com/"
            timeperiod="2017 - ???"
            subtitle="Project where I did this thing"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
