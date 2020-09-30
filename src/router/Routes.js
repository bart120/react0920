import { CircularProgress } from '@material-ui/core';
import React, { Component, Suspense } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import PrivateRoute from '../core/components/authentication/PrivateRoute';
import HomePage from '../pages/home/HomePage';
import RoomAddPage from '../pages/rooms/RoomAddPage';
import RoomDetailPage from '../pages/rooms/RoomDetailPage';
//import RoomListPage from '../pages/rooms/RoomListPage';

//import AuthenticationPage from '../pages/authentication/AuthenticationPage';
const authPage = React.lazy(() => import('../pages/authentication/AuthenticationPage'));
const listPage = React.lazy(() => import('../pages/rooms/RoomListPage'));


class Routes extends Component {
    render() {
        return (
            <Suspense fallback={(<CircularProgress>Chargement en cours...</CircularProgress>)}>
                <Route path="/" exact component={HomePage} />
                <Route path="/rooms/list" exact component={listPage} />
                <PrivateRoute path="/rooms/add" exact component={RoomAddPage} />
                <PrivateRoute path="/rooms/detail/:id" component={RoomDetailPage} />
                <Route path="/login" exact component={authPage} />
            </Suspense>
        )
    }
}

const mapStateToProps = state => {
    return { isConnected: state.auth.isConnected };
}

export default connect(mapStateToProps)(Routes);
