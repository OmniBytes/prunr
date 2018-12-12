import React from "react";
import { initGA, logPageView } from "./utils";

export default class Analytics extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
