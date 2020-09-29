import React, { Component } from 'react';
import LoginForm from '../../core/components/authentication/LoginForm';
import './AuthenticationPage.css';
import Alert from '@material-ui/lab/Alert';

export class AuthenticationPage extends Component {


    onSubmit = (data) => {
        console.log('data:', data);
        //call identity server
    }


    render() {
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

export default AuthenticationPage;
