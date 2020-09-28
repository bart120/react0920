import { AppBar, Toolbar } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <h3>Mon App en formation</h3>
                    <Link to="/" className="link">Accueil</Link>
                    <Link to="/rooms/list" className="link">Salles</Link>
                    <Link to="/rooms/add" className="link">Ajouter</Link>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
