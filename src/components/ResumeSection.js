import React from 'react';
import { Row, Col } from 'react-bootstrap';

import SKILLS from '../data/skills';
import Skill from './Skill';
import './ResumeSection.css';

class ResumeSection extends React.Component {
  render() {
    return (
      <div id="skills">
        <Row>
          <Col sm="2">
            <h1>Skills</h1>
          </Col>
          <Col sm="10">
            <div className="skill-container">
              {
                SKILLS.map(skill => (
                  <Skill key={skill.id} skill={skill} />
                ))
              }
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ResumeSection;