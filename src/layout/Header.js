import { AppBar, Toolbar } from '@material-ui/core';
import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <h3>Mon App en formation</h3>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header;
