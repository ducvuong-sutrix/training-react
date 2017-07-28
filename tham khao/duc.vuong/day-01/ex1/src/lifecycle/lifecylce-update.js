import React from "react";

class Hello extends React.Component {
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
			<p>Hello</p>
		);
	}
}
export default Hello;