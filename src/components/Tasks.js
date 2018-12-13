import React, { Component } from "react";
import TasksNew from "./TasksNew";
import TasksList from "./TasksList";

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: "first task", description: "first task description" },
        { title: "second task", description: "second task description" },
        { title: "third  task", description: "third task description" }
      ]
    };
    this.destroyTask = this.destroyTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  destroyTask(idx) {
    this.state.tasks.splice(idx, 1);
    this.setState({
      tasks: [...this.state.tasks]
    });
  }

  // since we are not => arrow func we need to bind this in the constructor
  addTask(newTask) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        newTask
        // repalced with newTask obj
        // {
        //   title: newTask.title,
        //   description: newTask.description
        // }
      ]
    });
  }

  render() {
    return (
      <div>
        <h1>TaskApp</h1>

        <TasksNew addTask={this.addTask} />

        <TasksList tasks={this.state.tasks} destroyTask={this.destroyTask} />
      </div>
    );
  }
}

export default Tasks;
