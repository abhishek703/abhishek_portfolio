import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../../Assets/Admin-Panel-Dashboard.png";
import olximage from "../../Assets/olx-clone image.png";
import netfliximage from "../../Assets/React-App-netflix-clone.png";
import gridlinesbuilders from "../../Assets/Gridlinesbuilders.png";
import charlespizza from "../../Assets/Charlestown-Pizza.png";
import todolist from "../../Assets/todolist.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="CHETAK"
                description="CHETAK is a static webpage built with HTML, CSS. Users can see images of their work. webpage builds to learn HTML & CSS it's not a responsive website."
                ghLink="https://abhishek703.github.io/website.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Pets Watch"
                description="Pets Watch is a static website completely build with bootstrap with fully responsive."
                ghLink="https://abhishek703.github.io/bootstrapsecond.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App It was created with React js to learn how to work with react js, hooks and props in that will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://abhishek703.github.io/ToDoListWeb/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="React App"
                description="React App created with React js and Bootstrap. Using React-router and react hooks to Understand how to work React Router."
                ghLink="https://abhishek703.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="India Covid-19 Dashboard"
                description="India Covid-19 Dashboard builds with react js.It uses ICD (India Covid Data Base ) API and uses the Axios tool."
                ghLink="https://abhishek703.github.io/Covid19DashboardWebApp/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="GoogleKeep-Clone"
                description="This project is a simplified front-end clone of GoogleKeep. It was created with React js."
                ghLink="https://abhishek703.github.io/AbhishekKeepWebApp/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
