import './App.css';
import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import setup from "./setup";
import welcome from './welcome.jpg'
setup();

class App extends Component {
  render() {
    const style: any = {textAlign:'center', paddingTop: '20px'};
    return (
      <div style={style}>
        <h1>Welcome</h1>
        <img src={welcome} alt=""/>
      </div>
    );
  }
}

const signUpConfig = {
  header: 'Testable Sign Up Form',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Username',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    }
  ]
};

export default withAuthenticator(App, {
  includeGreetings: true,
  signUpConfig,
});
