import React from "react";
// import "../public/App.css";
import DataPrint from "./dataPrint";
import AddData from "./addData";
var todos = [
  {
    _id: 0,
    title: "Todo App 1",
    description: "This is the first todo",
    status: 1
  },
  {
    _id: 1,
    title: "Todo App 2",
    description: "This is the second todo",
    status: 1
  },
  {
    _id: 2,
    title: "Todo App 3",
    description: "This is the third todo app",
    status: 1
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    };
  }
  render() {
    return (
      <html>
        <head>
          <link href="App.css" rel="stylesheet" />
        </head>
        <body>
          <div className="App">
            <div className="PageHeader">
              <h2>
                Welcome to React {this.props.name}
              </h2>
            </div>
            <div className="PageContent">
              <div className="PageLeft">
                <DataPrint
                  todos={this.state.todos}
                  deletetask={this.deletetask.bind(this)}
                  editData={this.editData.bind(this)}
                />
              </div>
              <div className="PageRight">
                <h1>Add Data</h1>
                <AddData addData={this.addData.bind(this)} />
              </div>
            </div>
            <div className="pageBottom">Thanx</div>
          </div>
        </body>
      </html>
    );
  }

  deletetask(task) {
    todos[task].status = 0;
    alert("sadS");
    this.setState({ todos: this.state.todos });
  }
  addData(task) {
    task._id = todos.length + 1;
    todos.push(task);
    this.setState({ todos: this.state.todos });
  }
  editData(task) {
    todos[task.id].title = task.title;
    todos[task.id].description = task.desc;
    this.setState({ todos: this.state.todos });
  }
}

export default App;
