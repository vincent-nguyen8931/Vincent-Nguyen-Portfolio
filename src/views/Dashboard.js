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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import data from "../data.json";

function Dashboard() {
  return (
    <div className="content">
      <Row>
        {data.map(item =>
          <Col lg="6">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h3">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <figure>
                  <img src={item.img} style={{ height: "200px" }} />
                </figure>
                <p>{item.description} <br />
                </p>
                <div style={{ color: "white" }}>
                  Deployed site:
            <a href={item.deployedSite} style={{ color: "rgb(37, 120, 246)" }}>
                    View here</a>
                </div>
                <div style={{ color: "white" }}>
                  GitHub Repo:
             <a href={item.githubSite} style={{ color: "rgb(37, 120, 246)" }}>
                    Link</a>
                </div>
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Dashboard;
