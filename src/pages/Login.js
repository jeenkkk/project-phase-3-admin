
import React, { Component } from "react";
//import styled from 'styled-components';
import '../css/login.css';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState(e);
    }
    handleSubmit(e) {
        
        if (this.state.userID == 'admin' && this.state.password == 'admin') {
            alert("Welcome "+this.state.userID);
            this.props.history.push('/Product');
        } else {
            alert('Invalid credentials');
        }
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9 col-md-12 col-lg-5 mx-auto">
                                <div class="card card-signin my-5">
                                    <div class="card-body">
                                        <h5 class="card-title text-center">Login</h5>
                                        <form onSubmit={this.handleSubmit} class="form-signin d-flex justify-content-center" >
                                            <input type="text" name="user" class="form-control" placeholder="User admin"
                                                value={this.state.userID} onChange={(e) =>
                                                    this.handleChange({
                                                        userID: e.target.value
                                                    })} />
                                            <input type="password" name="password" class="form-control" placeholder="password"
                                                value={this.state.password} onChange={(e) =>
                                                    this.handleChange({
                                                        password: e.target.value
                                                    })} />
                                            <button onClick={this.handleSubmit} class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" value="submit">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;