import React from "react";
import "./styles.css";

export class StateExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }
  incrementCount() {
    // this.setState(prev => ({count:prev.count +1}))
    //this.setState(prev => ({count:prev.count +1}))
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
    //  this.setState({count:this.state.count +1})
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div>
          <button onClick={() => this.incrementCount()}>Increment</button>
        </div>
        <h2>Start editing {this.state.count} to see some magic happen!</h2>
      </div>
    );
  }
}
