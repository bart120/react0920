import React, { Component } from 'react'
import { Route } from 'react-router';
import HomePage from '../pages/home/HomePage';
import RoomAddPage from '../pages/rooms/RoomAddPage';
import RoomListPage from '../pages/rooms/RoomListPage';

export class Routes extends Component {
    render() {
        return (
            <>
                <Route path="/" exact component={HomePage} />
                <Route path="/rooms/list" exact component={RoomListPage} />
                <Route path="/rooms/add" exact component={RoomAddPage} />
            </>
        )
    }
}

export default Routes;
