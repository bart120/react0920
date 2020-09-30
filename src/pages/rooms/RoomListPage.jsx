import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import RoomService from '../../services/RoomService';

export class RoomListPage extends Component {

    //servRoom = new RoomService();

    state = {
        rooms: null// [{ name: 'toto', id: 1 }, { name: 'bob', id: 3 }, { name: 'titi', id: 6 }]
    }

    componentDidMount() {
        //this.setState({ rooms: this.servRoom.getRooms() });
        this.loadRooms();
        //console.log("props", this.props);
    }

    loadRooms() {
        this.props.services.servRoom.getRooms().then(data => {
            this.setState({ rooms: data });
        }).catch(err => {
            alert(`Erreur: ${err}`);
        });
    }

    onDelete(room) {
        this.props.services.servRoom.deleteRoom(room.id).then(
            data => {
                alert(`La salle ${data.name} est supprimée`);
                this.loadRooms();
            }
        );
    }

    componentDidCatch(err) {
        alert(err);
    }


    render() {
        return (
            <div>
                <h1>Liste des salles</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell align="right">Prix</TableCell>
                                <TableCell align="right">Places</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        {this.state.rooms ? (
                            <TableBody>
                                {this.state.rooms.map((room) => (
                                    <TableRow key={room.id}>
                                        <TableCell>{room.name}</TableCell>
                                        <TableCell align="right">{room.price}</TableCell>
                                        <TableCell align="right">{room.seatCount}</TableCell>
                                        <TableCell align="right">
                                            <Link to={{ pathname: `/rooms/detail/${room.id}`, state: { room: room } }}>Détails</Link>
                                            <Button variant="contained" color="primary" onClick={() => this.onDelete(room)} >Suppr.</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>) :
                            (<TableBody><TableRow><TableCell colSpan="4">Chargement en cours</TableCell></TableRow></TableBody>)}
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    //console.log("store", store);
    return { services: { servRoom: store.services.serviceRoom } };
}

export default connect(mapStateToProps)(RoomListPage);
