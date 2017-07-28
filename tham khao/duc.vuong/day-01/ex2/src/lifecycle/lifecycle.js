import React from "react";
import Hello from "./lifecylce-update";
class Lifecycle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "Hello"
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
	render() {
		console.log("render");
		return (
			<div>
				<p> {this.props.message} </p>
				<button onClick = {this.message}>Change</button>
				<Hello message = {this.state.message}/>
			</div>
		)
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}
}
export default Lifecycle;