import React, { Component } from 'react';
import LoginForm from '../../core/components/authentication/LoginForm';
import './AuthenticationPage.css';
import Alert from '@material-ui/lab/Alert';
import { login } from '../../core/redux/actions/AuthenticationActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class AuthenticationPage extends Component {


    onSubmit = (data) => {
        //console.log('data:', data);
        //call identity server
        this.props.login({ name: data.email });
    }


    render() {
        //console.log(this.props);
        return (
            <div>
                <h1>Authentification</h1>
                <LoginForm onLogon={this.onSubmit} title="Connexion">
                    <Alert severity="info">Merci de saisir vos identifiants.</Alert>
                </LoginForm>
            </div>
        )
    }
}

const mapDispatchToProps = (payload) => {
    return { login: bindActionCreators(login, payload) };
}

export default connect(null, mapDispatchToProps)(AuthenticationPage);
