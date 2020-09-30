import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

class PrivateRoute extends Component {

    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={() => {
                return (this.props.isConnected ? <Component /> : <Redirect to={{ pathname: '/login' }} />);
            }} />
        )
    }
}
const mapStateToProps = state => {
    return { isConnected: state.auth.isConnected };
}

export default connect(mapStateToProps)(PrivateRoute)
