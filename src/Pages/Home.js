import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { createEpic } from '../Actions/epic.action';
import { connect } from 'react-redux';
import { EpicCreationForm } from '../Components/EpicCreationFrom';
import { getEpicId } from '../Store/Selectors/epic.selector';

import 'antd/dist/antd.css';
import './Home.scss';
import 'babel-polyfill';

Amplify.configure(aws_exports);

const mapStateToProps = state => ({
  epicId: getEpicId(state),
});

const mapDispatchToProps = dispatch => {
  return {
    createCurrentEpic: epicName => {
      dispatch(createEpic(epicName));
    },
  };
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      epicName: '',
    };

    this.createEpic = this.createEpic.bind(this);
    this.setEpicName = this.setEpicName.bind(this);
  }

  componentDidUpdate() {
    const { history, epicId } = this.props;

    if (epicId.length > 0) {
      history.push(`/estimation?id=${epicId}`);
    }
  }

  async createEpic() {
    const { createCurrentEpic } = this.props;
    const { epicName } = this.state;

    createCurrentEpic(epicName);
  }

  setEpicName(event) {
    this.setState({
      epicName: event.target.value,
    });
  }

  render() {
    return (
      <div className="Home-body">
        <EpicCreationForm
          onCreate={this.createEpic}
          onInputChange={this.setEpicName}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Home, { includeGreetings: false }));
