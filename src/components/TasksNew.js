import React, { Component } from "react";
import "./TaskList.css";

class TasksNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange = (e) => { // use this, ^ ^ remove bind
  handleChange(e) {
    console.log(e.target.value);
    console.log(e.target.name);
    // we have to fix 'this' by binding it in the constructor
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //doesn't take anything in bc it can look at the state
    this.props.addTask({
      title: this.state.title,
      description: this.state.description
    });
    this.setState({
      title: "",
      description: ""
    });
  }

  render() {
    return (
      <div className="bg">
        <h3>TaskNew</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="enter task"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="enter description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TasksNew;
