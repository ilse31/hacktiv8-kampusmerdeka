import { Route } from "react-router-dom";
import React from "react";
import BoardContainer from "../components/BoardContainer";

const routes = [
  <Route key='/' exact path='/' component={BoardContainer}></Route>,
];

export default routes;
