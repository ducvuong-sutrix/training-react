import React from "react";
import Hello from "./lifecycle";
class Lifecycle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ""
		};
		this.message = this.message.bind(this);
	}
	message() {
		return this.setState({
			message: "This is new message when clicked button"
		});
	}
	componentWillMount() {
		console.log("componentWillMount");
	}
	componentDidMount() {
		console.log("conponentDidMount");
	}
	componentnWillReceiveProps() {
		console.log("componentnWillReceiveProps");
	}
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
		return true;
	}
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	componentDidUpdate() {
		console.log("componentDidUpdate");
	}
	render() {
		console.log("render");
		return (
			<div>
				<p> {this.props.message} </p>
				<button onClick = {this.message}>Change</button>
			</div>
		)
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}
}
export default Lifecycle;