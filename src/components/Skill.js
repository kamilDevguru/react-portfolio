import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IconContext } from "react-icons";
import {
  DiReact,
  DiAtom,
  DiAngularSimple,
  DiBitbucket,
  DiCss3,
  DiDjango,
  DiDocker,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiLaravel,
  DiLess,
  DiMongodb,
  DiNodejsSmall,
  DiPhp,
  DiRuby,
  DiSass,
  DiWordpress,
  DiCode
} from "react-icons/di";
import {
  FaVuejs
} from 'react-icons/fa';

class Skill extends Component {
  showIcon(title) {
    switch (title) {
      case 'React':
        return <DiReact />
        break;
      case 'Redux':
        return <DiAtom />
        break;
      case 'Vue':
        return <FaVuejs />
        break;
      case 'Angular':
        return <DiAngularSimple />
        break;
      case 'Bootstrap':
        return <DiBitbucket />
        break;
      case 'Css3':
        return <DiCss3 />
        break;
      case 'Django':
        return <DiDjango />
        break;
      case 'Docker':
        return <DiDocker />
        break;
      case 'Git':
        return <DiGit />
        break;
      case 'Html5':
        return <DiHtml5 />
        break;
      case 'Javascipt':
        return <DiJsBadge />
        break;
      case 'Laravel':
        return <DiLaravel />
        break;
      case 'Less':
        return <DiLess />
        break;
      case 'MongoDB':
        return <DiMongodb />
        break;
      case 'Node':
        return <DiNodejsSmall />
        break;
      case 'Php':
        return <DiPhp />
        break;
      case 'Ruby':
        return <DiRuby />
        break;
      case 'Sass':
        return <DiSass />
        break;
      case 'Wordpress':
        return <DiWordpress />
        break;

      default:
        return <DiCode />;
    }
  }

  render() {
    return (
      <Row className="skill">
        <Col sm="4">
          <IconContext.Provider value={{ color: "blue", size: "12em", className: "global-class-name" }}>
            <div>
              {this.showIcon(this.props.skill.title)}
            </div>
          </IconContext.Provider>
        </Col>
        <Col sm="8" className="skill-description">
          <h1>{this.props.skill.title}</h1>
          <h3>
            <span>Point:</span>
            {` 10/${this.props.skill.point}`}
          </h3>
        </Col>
      </Row>
    );
  }
}

export default Skill;