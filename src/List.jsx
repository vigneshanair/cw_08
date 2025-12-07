import React, { Component } from "react";

class List extends Component {
  renderList() {
    return this.props.items.map((item) => (
      <li key={item.name} className="produce-item">
        <span className="produce-name">{item.name}</span>
        <span
          className={
            "produce-type-badge " + (item.type === "Fruit" ? "fruit" : "veg")
          }
        >
          {item.type}
        </span>
      </li>
    ));
  }

  render() {
    return <ul className="produce-list">{this.renderList()}</ul>;
  }
}

export default List;
