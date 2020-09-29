import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { Component } from 'react'

export class RoomListPage extends Component {

    state = {
        rooms: [{ name: 'toto' }, { name: 'titi' }]
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
                        <TableBody>
                            {this.state.rooms.map((room) => (
                                <TableRow>
                                    <TableCell>{room.name}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default RoomListPage;
