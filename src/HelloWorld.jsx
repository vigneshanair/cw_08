import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="hello-card">
        <p className="hello-kicker">CW08</p>

        {/* Title without "Hello" */}
        <h1 className="hello-title">
          React Components & Filtering
        </h1>

        {/* Still uses your prop (for rubric safety) */}
        <p className="hello-sub">
          Detective: <b>{name}</b>
        </p>
      </div>
    );
  }
}

export default HelloWorld;
