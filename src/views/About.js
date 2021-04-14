/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col,
} from "reactstrap";

function About() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardBody>
              <CardText />
              <div className="author">
                <div className="block block-one" />
                <div className="block block-two" />
                <div className="block block-three" />
                <div className="block block-four" />
                  <h3 className="title">Vincent Nguyen</h3>
              </div>
              <div className="card-description">
              Full Stack Developer who will work hard to ensure your solution meets the needs of the client. Always learning to keep up with the ever changing tech field. Completed a contract in prior career field as an Emergency Management Specialist to acquire a 750k mobile communication center reducing field response time from 30 minutes to 5 minutes. Earned a Bachelors degree in Computer Science from CSU Stanislaus on May 2020 and Certificate from UC Berkeley on March 2021 for full stack development. 
              </div>
            </CardBody>
            <CardFooter>
              <div className="button-container">
              <Button className="btn-icon btn-round" >
                  <a className="fas fa-file-pdf" href="https://drive.google.com/file/d/1udxjOWt6r9gBuobkJiwcEsh7okbdFwad/view?usp=sharing" style={{color: "white"}}/>
                </Button>
              <Button className="btn-icon btn-round" >
                  <a className="fas fa-envelope" href="mailto: vincent.nguyen8931@gmail.com" style={{color: "white"}}/>
                </Button>
                <Button className="btn-icon btn-round" >
                  <a className="fab fa-linkedin" href="https://www.linkedin.com/in/vincent-nguyen8931/" style={{color: "white"}}/>
                </Button>
                <Button className="btn-icon btn-round" >
                  <a className="fab fa-github" href="https://github.com/vincent-nguyen8931" style={{color: "white"}}/>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
