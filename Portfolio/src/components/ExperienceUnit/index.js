import React, { Component } from 'react'

import './style.scss'

class ExperienceUnit extends Component {
  render() {
    return (
      <div className="experience-unit col-xs-12 col-sm-6 col-md-4">
        <div
          className="image"
          style={{
            backgroundImage: `url(${this.props.logo})`,
            backgroundColor: this.props.colour
          }}>
        </div>
        <div className="title bold">
          {this.props.title}
        </div>
        <div className="position bold">
          {this.props.position}
        </div>
        <div className="time-period">
          {this.props.timeperiod}
        </div>
        <div className="subtitle">
          {this.props.subtitle}
        </div>
      </div>
    )
  }
}

export default ExperienceUnit
