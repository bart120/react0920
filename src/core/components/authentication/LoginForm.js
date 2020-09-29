import { Button, TextField } from '@material-ui/core'
import React, { Component } from 'react'
import InputMail from '../forms/InputMail';
import { PropTypes } from 'prop-types';

export class LoginForm extends Component {

    static propTypes = {
        onLogon: PropTypes.func.isRequired,
        title: PropTypes.string
    }

    constructor() {
        super();
        this.submit = this.submit.bind(this);
    }

    state = {
        email: '',
        password: ''
    }

    submit(ev) {
        ev.preventDefault();
        this.props.onLogon(this.state);
    }

    changeFormField = (ev) => {
        //console.log(ev.target.value);
        //let obj = { [ev.target.name]: ev.target.value };
        //console.log(obj);

        //this.state[ev.target.name] = ev.target.value;
        this.setState({ [ev.target.name]: ev.target.value });
        //console.log(this.state);
    }



    render() {
        //console.log(this.props);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <form noValidate onSubmit={this.submit}>
                    <div>
                        {/*<TextField label="Email" type="email" name="email" onChange={this.changeFormField} value={this.state.email} />*/}
                        <InputMail name="email" label="Votre email" validator onValid={this.changeFormField} />
                    </div>
                    <div>
                        <TextField label="Mot de passe" type="password" name="password" onChange={this.changeFormField} value={this.state.password} />
                    </div>
                    <Button type="submit" variant="contained" color="primary">Se connecter</Button>
                </form>
                {this.props.children}
            </div>
        )
    }
}

export default LoginForm;
