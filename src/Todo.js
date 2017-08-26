import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoList.css";

export default class Todo extends Component {
  renderTitle(todo) {
    return (
      <div className="Todo-title">
        <div>
          <b>Title-</b> &nbsp;
          <div id={"title" + todo._id}>{todo.title}</div>
          <br />
        </div>
      </div>
    );
  }

  renderBody(todo) {
    return (
      <div className="Todo-body">
        <div className="Todo-description">
          <b>Description </b>
          <div id={"des" + todo._id}>
            {todo.description}
          </div>
        </div>
      </div>
    );
  }

  renderButtons(todo) {
    return (
      <div className="Todo-buttons">
        <button
          title="Edit"
          className="Todo-edit-button"
          id={todo._id}
          onClick={() => this.props.editTodo(todo)}
        >
          &#9998;
        </button>
        <button
          title="Delete"
          className="Todo-delete-button"
          onClick={e => this.props.deleteTodo(todo)}
        >
          &#10008;
        </button>
      </div>
    );
  }

  render() {
    const { todo } = this.props;

    return todo.status
      ? <div className="Todo">
          {this.renderButtons(todo)}
          {this.renderTitle(todo)}
          {this.renderBody(todo)}
        </div>
      : <div className="Todo" />;
  }
}

Todo.propTypes = {
  todo: PropTypes.object,
  editTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};
