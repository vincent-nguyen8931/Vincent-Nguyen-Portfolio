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
              An aspiring full stack developer who completed the full stack coding course from UC Berkeley. My reason is to increase my knowledge of building applications and apply what I have learned from my Computer Science degree. I graduated from CSU Stanislaus in May 2020.
              </div>
            </CardBody>
            <CardFooter>
              <div className="button-container">
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
