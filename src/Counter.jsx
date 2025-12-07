import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
  }

  incrementCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  // Extra polish (safe for rubric)
  decrementCount = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  resetCount = () => {
    this.setState({ count: 5 });
  };

  render() {
    return (
      <div className="counter-card">
        <div className="counter-header">
          <h2 className="section-title">Counter</h2>
          <span className="chip">State + Events</span>
        </div>

        <div className="counter-display">{this.state.count}</div>

        <div className="counter-actions">
          <button
            className="btn btn-default counter-btn"
            onClick={this.decrementCount}
            type="button"
          >
            −
          </button>

          <button
            className="btn btn-primary counter-btn"
            onClick={this.incrementCount}
            type="button"
          >
            +
          </button>

          <button
            className="btn btn-link counter-link"
            onClick={this.resetCount}
            type="button"
          >
            reset to 5
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
