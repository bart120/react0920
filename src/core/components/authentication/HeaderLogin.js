import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class HeaderLogin extends Component {

    state = {
        user: null
    }

    render() {
        return (
            <>
                {this.state.user ?
                    (<>Bonjour ${this.state.user.name} <Button>Se déconnecter</Button></>) :
                    (<Link to="/login" className="link">Se connecter</Link>)
                }
            </>
        )
    }
}

export default HeaderLogin;
