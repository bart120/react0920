import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export class HeaderLogin extends Component {

    static propTypes = {
        ageCapitaine: PropTypes.string.isRequired
    }

    state = {
        user: null//{ name: 'Claude' }
    }

    render() {
        console.log('state:', this.state);
        console.log('props:', this.props);
        return (
            <>
                {this.state.user ?
                    (<>Bonjour {this.state.user.name} <Button>Se déconnecter</Button></>) :
                    (<Link to="/login" className="link">Se connecter</Link>)
                }
            </>
        )
    }
}

export default HeaderLogin;
