import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/index.css';
import '../css/style.css';
const Navv = styled.nav`
    flex-direction: row;
    display:flex;
    margin: 0px;
    background-color: #e7dec8;
`

class Nav extends React.Component {
    render() {
        return (
            <Navv>
                <nav class="logo">
                    <h1>
                        &nbsp;SHOP<font color="#cbaf87">FLAX</font>
                    </h1>
                </nav>
                <nav class="navbar">
                    <Link to="/" style={{ textDecoration: 'none', padding: "10px", color: "darkred" }}>Home</Link>
                    <Link to="/Login" style={{ textDecoration: 'none', padding: "10px", color: "darkred" }}>Login</Link>
                    <Link to="/Product" style={{ textDecoration: 'none', padding: "10px", color: "darkred" }}>Product</Link>
                    <Link to="/User" style={{ textDecoration: 'none', padding: "10px", color: "darkred" }}>User</Link>
                </nav>
            </Navv>
        );
    }
}

export default Nav;