import "./App.css";
import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";
import setup from "./setup";
import welcome from "./welcome.jpg";
import { signUpConfig } from "./config";
setup();

class App extends Component {
  render() {
    const style: any = { textAlign: "center", paddingTop: "20px" };
    return (
      <div style={style}>
        <h1>Welcome</h1>
        <img src={welcome} alt="" />
      </div>
    );
  }
}

export default withAuthenticator(App, {
  includeGreetings: true,
  signUpConfig,
});
