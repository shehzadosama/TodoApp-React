import React, { Component } from 'react';
import TodoList from './TodoList';
var TodoItems = React.createClass({
  render: function () {
    var todoEntries = this.props.entries;   // this.props get the value of entries which is passed from TodoList

    function createTasks(item) {
      return <li key={item.key}>{item.text}</li>
    }

    var listItems = todoEntries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});
export default TodoItems;