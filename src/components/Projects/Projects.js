import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covid from "../../Assets/Projects/covid-19.png";
import numberblock from "../../Assets/Projects/number-blocks.png";
import news from "../../Assets/Projects/newspaper.png";
import dashboard from "../../Assets/Projects/dashboard.png";
import analysis from "../../Assets/Projects/analytics.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News-Later"
              description="News-Later website which shows current news in different categories like Sports, Science, Intertainment, Politics and more."
              ghLink="https://github.com/ujjwalkur/news_later"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Text-Analyzer"
              description="This project analyze your written text and tells you reading time, transform all text to lowercase to uppercase and vice-versa."
              ghLink="https://github.com/ujjwalkur/Text_Analyzer"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numberblock}
              isBlog={false}
              title="GuessTheNumber Game"
              description="This is a classic game where you can play a game with computer and guess the number, you have given limited chance and you have to guess and you can make high score as well."
              ghLink="https://github.com/ujjwalkur/All_Projects/tree/main/Guess%20Number"
            // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-Awareness-Website"
              description="This portal is realted to covid-19 where you can see all details related to covid and you can see symptoms and contact to government officials."
              ghLink="https://github.com/ujjwalkur/All_Projects/tree/main/CovidAwarenessWebsite"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Social-Media Dashboard"
              description="This project shows dashboard of social media which is created in react.js and shows all details related to user profile."
              ghLink="https://github.com/ujjwalkur/social-media-dashboard"
            // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
