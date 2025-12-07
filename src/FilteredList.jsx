import React, { Component } from "react";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };

  filterItems() {
    const { items } = this.props;
    const { search, type } = this.state;

    const searchLower = search.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch =
        searchLower.length === 0 ||
        item.name.toLowerCase().includes(searchLower);

      const matchesType =
        type === "All" || item.type === type;

      return matchesSearch && matchesType;
    });
  }

  render() {
    const filtered = this.filterItems();

    return (
      <div className="filter-card">
        <div className="filter-header">
          <h2 className="section-title">Produce Filter</h2>
          <span className="chip">Search + Type</span>
        </div>

        <div className="filter-controls">
          <div className="search-box">
            <label className="search-label" htmlFor="produceSearch">
              Search
            </label>
            <input
              id="produceSearch"
              className="form-control search-input"
              type="text"
              placeholder="Type to filter by name..."
              value={this.state.search}
              onChange={this.handleSearchChange}
            />
          </div>

          <div className="dropdown-box">
            <label className="search-label" htmlFor="typeSelect">
              Type
            </label>
            <select
              id="typeSelect"
              className="form-control search-input"
              value={this.state.type}
              onChange={this.handleTypeChange}
            >
              <option value="All">All</option>
              <option value="Fruit">Fruit</option>
              <option value="Vegetable">Vegetable</option>
            </select>
          </div>
        </div>

        <div className="filter-results">
          <div className="results-meta">
            <span className="results-count">
              Showing <b>{filtered.length}</b> item(s)
            </span>
          </div>

          <List items={filtered} />
        </div>
      </div>
    );
  }
}

export default FilteredList;
