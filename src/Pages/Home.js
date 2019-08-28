import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { EpicCreationForm, Navbar, EpicTable } from '../Components';
import './Home.scss';

Amplify.configure(aws_exports);

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="Home-body">
          <EpicCreationForm />
          <br />
          <EpicTable />
        </div>
      </>
    );
  }
}

export default (withAuthenticator(Home, { includeGreetings: false }));
