import React, { Component } from "react";
import "./TaskList.css";

class TaskList extends Component {
  constructor(props) {
    super(props);
    console.log("props or this.props => ", props);
    // because we used <TasksList tasks={this.state.tasks} />
    // we have access to the left side tasks here
    // in this.props since it was passed in props
    // console.log(this.props); // from Tasks.js this.state obj = { tasks: [] }
    // console.log(this.props.tasks[0].title);
  }

  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return (
        <li key={index}>
          {task.title} - {task.description} -
          <button
            onClick={() => {
              this.props.destroyTask(index);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
    console.log("tasks =>", tasks);
    return (
      <div className="bg">
        <h3>TaskList</h3>
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default TaskList;
