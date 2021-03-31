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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import data from "../data.json";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
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
                  <img src={item.img} style={{ height: "128px" }} />
                </figure>
                <p>{item.description} <br />
                </p>
                <div style={{ color: "rgb(37, 120, 246)" }}>
                  Deployed site:
            <a href={item.deployedSite} style={{ color: "white" }}>
                    View here</a>
                </div>
                <br />
                <div style={{ color: "rgb(37, 120, 246)" }}>
                  GitHub Repo:
             <a href={item.githubSite} style={{ color: "white" }}>
                    Link</a>
                </div>
              </CardBody>
            </Card>
          </Col>
          )}
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
