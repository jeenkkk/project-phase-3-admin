import React, { Component } from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Firstname: "",
            Lastname: "",
            Username: "",
            Password: "",
            email: "",
            role: "",
        };
        this.insertus = this.insertus.bind(this);
        this.updateus = this.updateus.bind(this);
        this.deleteus = this.deleteus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    insertus(event) {
        event.preventDefault();
        fetch('http://localhost:3030/insertus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({ show:{
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Username: this.state.Username,
                Password: this.state.Password,
                email: this.state.email,
                role: this.state.role,

            }
            })
            
        })
            .then(response => response.json())
            .then(response => {
                
                console.log(response);
                this.selectallus();
            });
    }
    updateus(event) {
        event.preventDefault();
        fetch('http://localhost:3030/updateus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({ show:{
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Username: this.state.Username,
                Password: this.state.Password,
                email: this.state.email,
                role: this.state.role,
            }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.selectallus();
            }
            );
    }
    deleteus(event) {
        event.preventDefault();
        fetch('http://localhost:3030/deleteus', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({ show:{
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Username: this.state.Username,
                Password: this.state.Password,
                email: this.state.email,
                role: this.state.role,
            }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.selectallus();
            }
            );

    }
    componentDidMount() {
        this.selectallus()
    }
    selectallus() {
        fetch('http://localhost:3030/selectallus', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    shows: response,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    handleChange(event) {
        this.setState(event);
    }
    render() {
        return (
            <div class="containter">
                <div class="row">
                    <div class="mx-auto">
                        <div class="card card-signin my-5">
                            <div class="card-body">
                                <label>Firstname:</label>
                                <input type="text" name="Firstname" value={this.state.Firstname} onChange={(e)=>this.handleChange({Firstname:e.target.value})}/><br />
                                <label>Lastname:</label>
                                <input type="text" name="Lastname" value={this.state.Lastname} onChange={(e)=>this.handleChange({Lastname:e.target.value})}/><br />
                                <label>Username:</label>
                                <input type="text" name="Username" value={this.state.Username} onChange={(e)=>this.handleChange({Username:e.target.value})}/><br />
                                <label>Password:</label>
                                <input type="text" name="Password" value={this.state.Password} onChange={(e)=>this.handleChange({Password:e.target.value})}/><br />
                                <label>email:</label>
                                <input type="text" name="email" value={this.state.email} onChange={(e)=>this.handleChange({email:e.target.value})}/><br />
                                <label>role:</label>
                                <input type="text" name="role" value={this.state.role} onChange={(e)=>this.handleChange({role:e.target.value})}/><br />
                                <button type="button" onClick={(event) => this.insertus(event)} class="btn btn-lg btn-primary btn-block text-uppercase">Insert</button>
                                <button type="button" onClick={(event) => this.updateus(event)} class="btn btn-lg btn-primary btn-block text-uppercase">updateus</button>
                                <button type="button" onClick={(event) => this.deleteus(event)} class="btn btn-lg btn-primary btn-block text-uppercase">deleteus</button>
                                <Shows shows={this.state.shows} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Shows extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>role</th>
                    <th>Password</th>
                    {/*<th>email</th>*/}
                    <th>Username</th>

                </tr>
                {this.props.shows && this.props.shows.map(show => {
                    return (
                        <tr> {"     "}
                            <td>{show.Firstname}</td>
                            <td>{show.Lastname}</td>
                            <td>{show.role}</td>
                            <td>{show.Password}</td>
                            {/*<IMGGG>
                                <td><img src={show.email}></img></td>
                    </IMGGG>*/}
                            <td>{show.Username}</td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}


export default User;