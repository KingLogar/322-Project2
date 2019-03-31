import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: '',
    view: 'taskList'
  }

  onViewChange(view){
    this.setState({view});
  }

  wrapPage(jsx){

    const { view } = this.state;

    return (
        <div classname="container">
          <PageTabs currentView={view}
                    onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    );
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/KingLogar/FakeDB1/posts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  onAddTask = (taskName) => {
    let tasks = this.state.tasks;
    tasks.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: 'task',
      column: 'todo'
    });

    this.setState({ tasks });
  }

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList });
  }

  render() {
    const {view} = this.state;

    switch (view){
      case 'taskList':
        return (this.wrapPage(<TaskList />));
      case 'addTask':
        return (this.wrapPage(<AddTask />));
      default:
        return (this.wrapPage(<TaskList />));
    }

    return (
      <div className="container">
        <AddTask onSubmit={this.onAddTask} />
        <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
      </div>
    );
  }
}

export default App;