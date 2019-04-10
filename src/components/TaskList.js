import React from 'react';

import Element from './taskElements';

class TaskList extends React.Component {

  render() {
    let tasks = this.props.t;
    let todoTask = [];
    let inProgressTask = [];
    let ReviewTask = [];
    let DoneTask = [];

    for (let task of tasks) {
      switch (task.column) {
        case "todo":
          todoTask.push(
              <Element.TodoElement title={task.title} type={task.type} id={task.id} startOnclick={this.props.action.startOnclick} />
          );
          break;
        case "in-progress":
          inProgressTask.push(
              <Element.InProgressElement title={task.title} type={task.type} id={task.id} sendBackOnclick={this.props.action.sendBackOnclick}  reviewOnclick={this.props.action.reviewOnclick} />
          );
          break;
        case "review":
          ReviewTask.push(
              <Element.ReviewElement title={task.title} type={task.type} id={task.id} backToWorkOnclick={this.props.action.backToWorkOnclick}  doneOnclick={this.props.action.doneOnclick} />
          );
          break;
        case "done":
          DoneTask.push(
              <Element.DoneElement title={task.title} type={task.type} id={task.id} reviewAgainOnclick={this.props.action.reviewAgainOnclick} />
          );
          break;
        default:
          break;
      }
    }

    return (
        <div className="taskBoard">
          <div className="taskBoard-Column taskBoard-darker">
            <div className="taskBoard-TodoTitle">
              To do
            </div>
            <div>{todoTask}</div>
          </div>
          <div className="taskBoard-Column">
            <div className="taskBoard-TodoTitle">
              In Progress
            </div>
            <div>{inProgressTask}</div>
          </div>
          <div className="taskBoard-Column taskBoard-darker">
            <div className="taskBoard-TodoTitle">
              Review
            </div>
            <div>{ReviewTask}</div>
          </div>
          <div className="taskBoard-Column">
            <div className="taskBoard-TodoTitle">
              Done
            </div>
            <div>{DoneTask}</div>
          </div>
        </div>
    )
  }
}

export default TaskList;