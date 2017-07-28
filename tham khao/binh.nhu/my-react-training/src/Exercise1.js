import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Exercise1 = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/exercise-1a">exercise-1a</Link></li>
                <li><Link to="/exercise-1b">exercise-1b</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/exercise-1a" component={Ex1a}/>
            <Route path="/exercise-1b" component={Ex1b}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

// ------------- Exercise 1a -----------------

class LifeCycle extends Component{

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log(`componentWillReceiveProps ${nextProps.text}`);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    render() {
        console.log('render');
        return(
            <div>{this.props.text}</div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

class Ex1a extends Component{
    constructor() {
        super();
        this.state = {
            txt: 'nothing'
        }
    }

    handleClick = () => {
        this.setState({txt: 'Hello World'})
    };

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <LifeCycle text={this.state.txt}/>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

Ex1a.defaultProps = {
    text: 'nothing'
};

export default Exercise1;

// ------------- Exercise 2 -----------------

let array = [];

class Ex1b extends Component{
    constructor() {
        super();
        this.state = {
            number: 0,
            full: false
        }
    }

    changeNumber = () => {
        let number = Math.round(Math.random()*10);
        while (array.includes(number) && array.length < 10) {
            number = Math.round(Math.random()*10);
        }
        if (array.length === 10) {
            this.setState({full: true})
        } else {
            this.setState({number});
            array.push(number);
        }
    };

    componentWillUpdate(nextProps, nextState) {
        console.log(nextState.number);
        console.log(array);
    }

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                Number is: {this.state.number}
                <br/>
                {this.state.full && <div>No more!</div>}
                <button onClick={this.changeNumber}>Change Number</button>
            </div>
        )
    }
}
