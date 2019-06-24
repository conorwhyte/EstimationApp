import React, { Component } from 'react';
import { notification } from 'antd';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from '../aws-exports'; // specify the location of aws-exports.js file on your project
import { createEpic } from '../Actions/epic.action';
import { connect } from 'react-redux';
import { listEpicsForUser, deleteEpicForUser } from '../Actions/CreateQuiz';
import { addEpicId } from '../Actions/epic.action';
import { EpicCreationForm } from '../Components/EpicCreationFrom';
import { Navbar } from '../Components/Navbar';
import { EpicTable } from '../Components/EpicTable';
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
    createCurrentEpic: (epicName, epicDescription) => {
      dispatch(createEpic(epicName, epicDescription));
    },
    addCurrentEpicId: id => {
      dispatch(addEpicId(id))
    }
  };
};

const openSuccessNotification = epicName => {
  notification['success']({
    message: 'Successfully deleted epic',
    description:
      `Sucessfully deleted epic ${epicName}`,
  });
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      epicName: '',
      listOfEpics: [],
      epicDescription: '',
    };

    this.listEpics = this.listEpics.bind(this);
    this.createEpic = this.createEpic.bind(this);
    this.setEpicName = this.setEpicName.bind(this);
    this.viewCurrentEpic = this.viewCurrentEpic.bind(this);
    this.deleteCurrentEpic = this.deleteCurrentEpic.bind(this);
    this.setEpicDescription = this.setEpicDescription.bind(this);
  }

  componentDidUpdate() {
    const { history, epicId } = this.props;

    if (epicId.length > 0) {
      history.push(`/estimation?id=${epicId}`);
    }
  }

  componentDidMount() {
    this.listEpics();
  }

  async listEpics() {
    const listEpics = await listEpicsForUser();

    this.setState({
      listOfEpics: listEpics.data.listEpics.items
    })
  }

  async createEpic() {
    const { createCurrentEpic } = this.props;
    const { epicName, epicDescription } = this.state;

    createCurrentEpic(epicName, epicDescription);
  }

  setEpicName(event) {
    this.setState({
      epicName: event.target.value,
    });
  }

  setEpicDescription(event) {
    this.setState({
      epicDescription: event.target.value,
    });
  }

  viewCurrentEpic(epic) {
    const { addCurrentEpicId } = this.props;
    addCurrentEpicId(epic.key);
  }

  async deleteCurrentEpic(epic) {
    const { key, name } = epic;
    
    await deleteEpicForUser(key);
    openSuccessNotification(name);
    
    this.listEpics();
  }

  render() {
    const { listOfEpics } = this.state;
    return (
      <>
        <Navbar />
        <div className="Home-body">
          <EpicCreationForm
            onCreate={this.createEpic}
            onInputChange={this.setEpicName}
            onDescriptionChange={this.setEpicDescription}
          />
          <br />
          <EpicTable listOfEpics={listOfEpics} viewEpic={this.viewCurrentEpic} deleteEpic={this.deleteCurrentEpic}/>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(Home, { includeGreetings: false }));
