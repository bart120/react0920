import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

class PrivateRoute extends Component {

    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <Route {...rest} render={() => {
                return (this.props.isConnected ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: this.props.history.location.pathname } }} />);
            }} />
        )
    }
}
const mapStateToProps = state => {
    return { isConnected: state.auth.isConnected };
}

export default connect(mapStateToProps)(withRouter(PrivateRoute))
