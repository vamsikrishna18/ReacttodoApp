import React, { Component } from 'react';
import './todolist.css';

import TodolistItems from '../todolistItems/index';


class TodolistComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.deletItems = this.deletItems.bind(this)
    }

    addItem = (event) => {
        if (this._inputElement.value !== "") {
            var itemvalue = {
                text: this._inputElement.value,
                key: Date.now()
            }

            this.setState((prevstate) => { return { items: prevstate.items.concat(itemvalue) } });

            this._inputElement.value = "";
            // console.log(this.state.items)
            event.preventDefault();
        }
    }

    deletItems(key) {
        var filterdItems = this.state.items.filter((item) => {
            return (item.key !== key)
        })

        this.setState({
            items: filterdItems
        })
    }

    render() {
        return (
            <div className="container-fluid TodolistMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <div className="row ">
                            <span className="col-sm-4"><input type="text" ref={(a) => this._inputElement = a} placeholder="Enter  task" className="form-control"></input></span>
                            <span className="col-sm-2"><button className="btn btn-primary" type="submit">Add</button></span>
                        </div>
                    </form>
                </div>
                <TodolistItems entries={this.state.items} delete={this.deletItems}></TodolistItems>
            </div>
        );
    }
}

export default TodolistComponent;