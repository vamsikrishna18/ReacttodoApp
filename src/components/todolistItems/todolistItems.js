import React, { Component } from 'react';
import './todolistitems.css';
import { Spring } from 'react-spring/renderprops';
class TodolistItems extends Component {

    constructor(props) {
        super(props);
        this.state = {}

        this.delete = this.delete.bind(this)
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var listItems = this.props.entries;
        return (
            <div className="todolistitemsMain">
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    {props => (
                        <div style={props}>
                            {listItems.map(listItems => <li onClick={() => this.delete(listItems.key)} key={listItems.key}>{listItems.text}</li>)}
                        </div>
                    )}
                </Spring>
            </div >
        );
    }
}

export default TodolistItems;