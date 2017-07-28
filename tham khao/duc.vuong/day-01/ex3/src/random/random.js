import React from "react"

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      min: "",
      max: "",
      arrayRandomNumber: []
    };
    this.random = this.random.bind(this);
    this.handleChangeMin = this.handleChangeMin.bind(this);
    this.handleChangeMax = this.handleChangeMax.bind(this);
    this.checkRepeat = this.checkRepeat.bind(this);
  }
  handleChangeMin(evt) {
    const min = (evt.target.validity.valid) ? evt.target.value : this.state.min;
    this.setState({
      min,
      arrayRandomNumber: []
    });
  }
  handleChangeMax(evt) {
    const max = (evt.target.validity.valid) ? evt.target.value : this.state.max;
    this.setState({
      max,
      arrayRandomNumber: []
    });
  }
  checkRepeat(num) {
    let flag = false;
    if (this.state.arrayRandomNumber.length === (this.state.max - this.state.min + 1)) {
      return alert("Random enough number in range");
    }
    for(let i = 0; i < this.state.arrayRandomNumber.length; i++) {
      if(parseInt(num) === parseInt(this.state.arrayRandomNumber[i])) {
        flag = true;
      }
    }
    if (flag === true) {
      this.random();
    } else {
      var arrayvar = this.state.arrayRandomNumber;
      arrayvar.push(num);
      this.setState({
        arrayRandomNumber: arrayvar
      });
    }
  }
  random() {
    var max = Math.floor(this.state.max);
    var min = Math.ceil(this.state.min);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.checkRepeat(randomNumber);
  }
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
          <div>
            <div className="form-group">
              <label >Min</label>
              <input type="text" className="form-control" value={this.state.min} pattern="[0-9]*" onInput={this.handleChangeMin}/>
            </div>
            <div className="form-group">
              <label>Max</label>
              <input type="text" className="form-control" value={this.state.max}  pattern="[0-9]*" onInput={this.handleChangeMax} />
            </div>
            <button className="btn btn-primary" onClick={this.random}>Random</button>
          </div>
        </div>
        <div className="form-group">
          <label>Result</label>
          <ul>
            {this.state.arrayRandomNumber.map(function(value) {
              return <li>{value}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Random
