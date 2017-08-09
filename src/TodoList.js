import React, { Component } from 'react';
import './TodoList.css';
import TodoItems from './TodoItems';
import logo from './logo.svg';
import todo from './todo.png';

var TodoList = React.createClass({

    getInitialState: function () {
        return {       // when page loads it initializes the value of items null
            items: []
        };
    },
    addItem: function (e) {
        var itemArray = this.state.items;         // copy current data to itemArray
        if (this._inputElement.value == "") {           // check input if it is empty
            alert("please enter something !!");
            // this.setState({
            //     items: itemArray               // if empty then assign current data of itemArray to items
            // });

            // this._inputElement.value = "";

            e.preventDefault();
        }
        else {        // if not empty
            itemArray.push(      // then push the input of text field to itemArray
                {
                    text: this._inputElement.value,
                    key: Date.now()
                }
            );

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";

            e.preventDefault();
        }
    },

    removeAll: function (e) {

        var itemArray = [];
        this.setState({
            items: itemArray
        });
    },







    render: function () {
        return (
            <div className="todoListMain">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={todo} className="todo" />
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="Enter your work.....">

                        </input>
                        <button type="submit">ADD ITEM</button>

                    </form>
                    <button onClick={this.removeAll} type="submit">REMOVE ALL</button>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }

});



export default TodoList;