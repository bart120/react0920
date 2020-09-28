import { CircularProgress } from '@material-ui/core';
import React, { Component, Suspense } from 'react'
import { Route } from 'react-router';
import HomePage from '../pages/home/HomePage';
import RoomAddPage from '../pages/rooms/RoomAddPage';
//import RoomListPage from '../pages/rooms/RoomListPage';

//import AuthenticationPage from '../pages/authentication/AuthenticationPage';
const authPage = React.lazy(() => import('../pages/authentication/AuthenticationPage'));
const listPage = React.lazy(() => import('../pages/rooms/RoomListPage'));


export class Routes extends Component {
    render() {
        return (
            <Suspense fallback={(<CircularProgress>Chargement en cours...</CircularProgress>)}>
                <Route path="/" exact component={HomePage} />
                <Route path="/rooms/list" exact component={listPage} />
                <Route path="/rooms/add" exact component={RoomAddPage} />
                <Route path="/login" exact component={authPage} />
            </Suspense>
        )
    }
}

export default Routes;
