import React, { Component } from 'react';
import './Registartion.css';

export class Registration extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username: '',
            LastName: '',
            Email: ''
        }
    }


    ChangeFormDetails = (event) => {
        const name = event.target.name;
        const value = event.target.value
        this.setState({
            [name]: value
        });
    }

    submitdetails = (event) => {
        console.log(this.state)
        event.preventDefault();
        this.setState({
            Username: '',
            LastName: '',
            Email: ''
        });
    }
    render() {
        const { Username, LastName, Email } = this.state
        return (
            <div className="registrationform">
                <h1>registartion form</h1>
                <form onSubmit={this.submitdetails}>
                    <div className="form-group formFeilds">
                        <label htmlFor="exampleInputUsername">UserName </label>
                        <input type="text" className="form-control" name="Username" value={Username} onChange={this.ChangeFormDetails} placeholder="Enter Username" />
                    </div>
                    <div className="form-group formFeilds">
                        <label htmlFor="exampleInputlastname">LastName </label>
                        <input type="text" className="form-control" name="LastName" value={LastName} onChange={this.ChangeFormDetails} placeholder="Enter Lastname" />
                    </div>
                    <div className="form-group formFeilds">
                        <label htmlFor="exampleInputEmail1">Email </label>
                        <input type="email" className="form-control" name="Email" value={Email} onChange={this.ChangeFormDetails} placeholder="Enter email" />
                    </div>
                    <div className="button">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
                {/* 
                <div>Username : {Username}</div>
                <div>LastName : {LastName}</div>
                <div>Email id : {Email}</div> */}
            </div>
        )
    }
}

export default Registration
