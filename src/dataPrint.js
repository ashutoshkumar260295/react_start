import React from "react";
import "./App.css";

export default class DataPrint extends React.Component {
	render() {
		return (
			<div>
				<h1>DataFlow of Datasets</h1>

				<nav className="ulStyle">
					{this.props.todos.map((todos, i) => {
						return (
							<div key={i}>
								{this.showData(todos)}
							</div>
						);
					})}
				</nav>
			</div>
		);
	}
	deleteData(dataId) {
		this.props.deletetask(dataId);
	}

	showData(todos) {
		if (todos.status)
			return (
				<div className="cards">
					<p>
						<b>Title-</b> &nbsp;
						{todos.title}
						<a title="Delete" className="iconright">
              &#x2713;
						</a>
						<a
							title="Delete"
							className="icon"
							onClick={e => this.deleteData(todos._id)}
						>
              &times;
						</a>
					</p>

					<a>
						<b>Description </b>
						{todos.description}
					</a>
				</div>
			);
	}
}
