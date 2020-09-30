import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../redux/actions/AuthenticationActions';

export class HeaderLogin extends Component {

    static propTypes = {
        ageCapitaine: PropTypes.string.isRequired
    }

    state = {
        //user: null//{ name: 'Claude' }
    }

    logout = () => {
        this.props.logout(null);
    }

    render() {
        //console.log('state:', this.state);
        //console.log('props:', this.props);
        return (
            <>
                {this.props.isConnected ?
                    (<>Bonjour {this.props.user.name} <Button onClick={this.logout}>Se déconnecter</Button></>) :
                    (<Link to="/login" className="link">Se connecter</Link>)
                }
            </>
        )
    }
}

const mapStateToProps = (stateStore) => {
    return { user: stateStore.auth.user, isConnected: stateStore.auth.isConnected };
}

const mapDispatchToProps = (payload) => {
    return { logout: bindActionCreators(logout, payload) };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogin);
