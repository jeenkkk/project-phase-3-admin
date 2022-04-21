import React, { Component } from "react";
import styled from "styled-components";
const IMGGG = styled.nav`
    width: 30px;
    height: 30px;
    margin: 15px;
`;
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Product_ID: "",
            Product_Name: "",
            Product_Description: "",
            Product_Price: "",
            Product_Image: "",
            Product_Category: "",
        };
        this.searchproid = this.searchproid.bind(this);
        this.searchproname = this.searchproname.bind(this);
        this.searchprocate = this.searchprocate.bind(this);
        this.insertpro = this.insertpro.bind(this);
        this.updatepro = this.updatepro.bind(this);
        this.deletepro = this.deletepro.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    searchproid(event) {
        event.preventDefault();
        fetch('http://localhost:3030/searchproid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                search: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    searchs: response,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    searchproname(event) {
        event.preventDefault();
        fetch('http://localhost:3030/searchproname', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                search: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    searchs: response,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    searchprocate(event) {
        event.preventDefault();
        fetch('http://localhost:3030/searchprocate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                search: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({
                    searchs: response,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    componentDidMount() {
        this.selectallpro()
    }
    selectallpro() {
        fetch('http://localhost:3030/selectallpro', {
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
    insertpro(event) {
        event.preventDefault();
        fetch('http://localhost:3030/insertpro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                show: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,

                }
            })

        })
            .then(response => response.json())
            .then(response => {

                console.log(response);
                this.selectallpro();
            });
    }
    updatepro(event) {
        event.preventDefault();
        fetch('http://localhost:3030/updatepro', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                show: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.selectallpro();
            }
            );
    }
    deletepro(event) {
        event.preventDefault();
        fetch('http://localhost:3030/deletepro', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            "body": JSON.stringify({
                show: {
                    Product_ID: this.state.Product_ID,
                    Product_Name: this.state.Product_Name,
                    Product_Description: this.state.Product_Description,
                    Product_Price: this.state.Product_Price,
                    Product_Image: this.state.Product_Image,
                    Product_Category: this.state.Product_Category,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.selectallpro();
            }
            );

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
                                <label>Product_ID:</label>
                                <input type="text" name="Product_ID" value={this.state.Product_ID} onChange={(e) => this.handleChange({ Product_ID: e.target.value })} /><br />
                                <label>Product_Name:</label>
                                <input type="text" name="Product_Name" value={this.state.Product_Name} onChange={(e) => this.handleChange({ Product_Name: e.target.value })} /><br />
                                <label>Product_Description:</label>
                                <input type="text" name="Product_Description" value={this.state.Product_Description} onChange={(e) => this.handleChange({ Product_Description: e.target.value })} /><br />
                                <label>Product_Price:</label>
                                <input type="text" name="Product_Price" value={this.state.Product_Price} onChange={(e) => this.handleChange({ Product_Price: e.target.value })} /><br />
                                <label>Product_Image:</label>
                                <input type="text" name="Product_Image" value={this.state.Product_Image} onChange={(e) => this.handleChange({ Product_Image: e.target.value })} /><br />
                                <label>Product_Category:</label>
                                <input type="text" name="Product_Category" value={this.state.Product_Category} onChange={(e) => this.handleChange({ Product_Category: e.target.value })} /><br />
                                <button type="button" onClick={(event) => this.insertpro(event)} class="btn btn-lg btn-primary btn-block text-uppercase">Insert</button>
                                <button type="button" onClick={(event) => this.updatepro(event)} class="btn btn-lg btn-primary btn-block text-uppercase">Update</button>
                                <button type="button" onClick={(event) => this.deletepro(event)} class="btn btn-lg btn-primary btn-block text-uppercase">Delete</button>
                                <Shows shows={this.state.shows} />
                                <br></br>
                                <button type="button" onClick={(event) => this.searchproid(event)} class="btn btn-lg btn-primary btn-block text-uppercase">SearchID</button>
                                <button type="button" onClick={(event) => this.searchproname(event)} class="btn btn-lg btn-primary btn-block text-uppercase">SearchName</button>
                                <button type="button" onClick={(event) => this.searchprocate(event)} class="btn btn-lg btn-primary btn-block text-uppercase">SearchCategory</button>
                                <h1>Search by ID or Name or Category</h1>
                                <Search searchs={this.state.searchs} />
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
                    <th>Product_ID</th>
                    <th>Product_Name</th>
                    <th>Product_Category</th>
                    <th>Product_Price</th>
                    {/*<th>Product_Image</th>*/}
                    <th>Product_Description</th>

                </tr>
                {this.props.shows && this.props.shows.map(show => {
                    return (
                        <tr> {"     "}
                            <td>{show.Product_ID}</td>
                            <td>{show.Product_Name}</td>
                            <td>{show.Product_Category}</td>
                            <td>{show.Product_Price}</td>
                            {/*<IMGGG>
                                <td><img src={show.Product_Image}></img></td>
                    </IMGGG>*/}
                            <td>{show.Product_Description}</td>
                        </tr>
                    );
                })}
            </table>

        );
    }
}

class Search extends React.Component {
    render() {
        return (
            <table>
                
                <tr>
                    <th>Product_ID &nbsp;</th>
                    <th>Product_Name &nbsp;</th>
                    <th>Product_Category &nbsp;</th>
                    <th>Product_Price &nbsp;</th>
                    <th>Product_Image &nbsp;</th>
                    <th>Product_Description &nbsp;</th>
                </tr>
                {this.props.searchs && this.props.searchs.map(search => {
                    return (
                        <tr> {"     "}
                            <td>{search.Product_ID}</td>
                            <td>{search.Product_Name}</td>
                            <td>{search.Product_Category}</td>
                            <td>{search.Product_Price}</td>
                            <td><img src={search.Product_Image} width="100px"></img></td>
                            <td>{search.Product_Description}</td>
                        </tr>
                    );
                })}
            </table>
        );
    }
}

export default Product;