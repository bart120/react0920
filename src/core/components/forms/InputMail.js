import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class InputMail extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        validator: PropTypes.bool,
        onValid: PropTypes.func,
        email: PropTypes.string
    }

    state = {
        errorEmail: false,
        //errorText: ''
    }

    changeInput = (ev) => {
        const value = ev.target.value;
        if (this.props.validator) {
            if (regEmail.test(value)) {
                this.setState({ errorEmail: false });
                this.props.onValid(ev);
            } else {
                this.setState({ errorEmail: true });
            }
        } else {
            this.props.onValid(ev);
        }
    }

    render() {
        return (
            <TextField type="email"
                label={this.props.label}
                name={this.props.name}
                value={this.props.value}
                onChange={this.changeInput}
                error={this.state.errorEmail}
                helperText={this.state.errorEmail ? 'Email invalide' : ''} />
        )
        /*return (
            <TextField type="email"
                {...this.props}
                 />
        )*/
    }
}

export default InputMail;
