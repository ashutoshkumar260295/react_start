import React from "react";
import Todo from "./Todo.js";
import "./TodoList.css";
import { DELETE, SHOWN, EditDivStatus } from "./App.js";
import _ from "lodash";
const data_item = [];

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }
  deleteTodo(todoToDelete) {
    const oldTodos = _.cloneDeep(this.state.todos);
    oldTodos.forEach(todo => {
      if (todo._id === todoToDelete._id) {
        todo.status = DELETE;
      }
    });
    this.setState({ todos: oldTodos });
  }

  editTodo(todo) {
    this.state.todos.forEach(todoToEdit => {
      if (todoToEdit._id === todo._id) {
        todoToEdit.title = todo.title;
        todoToEdit.description = todo.desc;
      }
    });

    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList-header">Todos</h1>
        <nav className="TodoList-body">
          {this.state.todos.map((todo, i) => this.renderTodo(todo, i))}
        </nav>
      </div>
    );
  }

  editShowTodo(todo) {
    return (
      <div>
        <input
          type="text"
          id={"Edittitle" + todo._id}
          placeholder={todo.title}
          className="Edittitle"
        />
        <br />
        <input
          type="text"
          id={"EditDes" + todo._id}
          className="EditDes"
          placeholder={todo.description}
        />
        <br />
        <button id="editSave" onClick={e => this.editDataList(todo._id)}>
          Edit
        </button>
        <button onClick={e => this.editCancel(todo._id)} id="editReset">
          Cancel
        </button>
      </div>
    );
  }
  editCancel(id) {
    document.getElementById("editList" + id).style.display = "none";
    return true;
  }
  editData(data) {
    data_item.push(data);
    data_item.forEach(function(item) {
      document.getElementById("editList" + item).style.display = "none";
    });
    document.getElementById("editList" + data).style.display = "block";
  }
  editDataList(id) {
    let task = {};
    task.id = id;
    task.title = document.getElementById("Edittitle" + id).value;
    task.desc = document.getElementById("EditDes" + id).value;
    this.props.editData(task);
    document.getElementById("editList" + id).style.display = "none";
  }

  renderTodo(todo, index) {
    return (
      <Todo
        key={index}
        todo={todo}
        editTodo={todo => this.editShowTodo(todo)}
        deleteTodo={todo => this.deleteTodo(todo)}
      />
    );
  }
}
