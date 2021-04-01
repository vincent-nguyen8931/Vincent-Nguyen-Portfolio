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
import Home from "views/Home.js";
import About from "views/About.js";

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "tim-icons icon-world",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-single-02",
    component: About,
    layout: "/admin",
  }
];
export default routes;
