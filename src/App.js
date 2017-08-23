import React from "react";
import "./App.css";
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
			<div className="App">
				<div className="PageHeader">
					<h2>Welcome to React</h2>
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
		);
	}

	deletetask(task) {
		for (var i = 0; i < todos.length; i++) {
			if (todos[i]._id === task) {
				todos[i].status = 0;
				break;
			}
		}
		this.setState({ todos: this.state.todos });
	}
	addData(task) {
		task._id = todos.length + 1;
		todos.push(task);
		this.setState({ todos: this.state.todos });
	}
	editData(task) {
		for (var i = 0; i < todos.length; i++) {
			if (todos[i]._id === task.id) {
				todos[i].title = task.title;
				todos[i].description = task.desc;
				break;
			}
		}
		this.setState({ todos: this.state.todos });
	}
}

export default App;
