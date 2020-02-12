import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className="clickable"
              key={column.path}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;

    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  raiseSort = path => {
    let { sortColumn, onSort } = this.props;
    sortColumn = { ...sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn = { path, order: "asc" };
    }
    onSort(sortColumn);
  };
}

export default TableHeader;
