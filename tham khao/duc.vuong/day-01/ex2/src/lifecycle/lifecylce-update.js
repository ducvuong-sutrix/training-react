import React from "react";

class Hello extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillReceiveProps() {
		console.log("componentWillReceiveProps");
	}
	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
		return true;
	}
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}
	componentDidUpdate() {
		console.log("componentWillUpdate");	
	}
	render() {
		console.log("render update");
		return(
			<p>{this.props.message}</p>
		);
	}
}
export default Hello;