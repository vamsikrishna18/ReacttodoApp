import React, { Component } from 'react'
import axios from 'axios';
import './httpcomponent.css';

export class HttpComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }


    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                this.setState({ items: response.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { items } = this.state;
        return (
            <div className="items">
                <div className="title"><h1>Lorem Ipsum Data</h1></div>
                {items.map(items => <p key={items.id}>{items.title}</p>)}
            </div>
        )
    }
}

export default HttpComponent
