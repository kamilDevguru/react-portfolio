import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './ResumeSection.css';

class ResumeSection extends React.Component {
  render() {
    return (
      <div id="skills">
        <Row>
          <Col sm="3">
            <h1>Skills</h1>
          </Col>
          <Col sm="9">
          </Col>
        </Row>
      </div>
    )
  }
}

export default ResumeSection;