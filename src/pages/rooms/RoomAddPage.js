import { Button, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { Component } from 'react'
import { connect } from 'react-redux';
//import RoomService from '../../services/RoomService';

export class RoomAddPage extends Component {

    //servRoom = new RoomService();

    state = {
        room: {},
        message: '',
        pictures: null,
        typeMessage: ''
    }

    componentDidMount() {
        this.setState({
            pictures: [
                { name: 'Calliope', file: 'Calliope.jpg' },
                { name: 'Thalie', file: 'Thalie.jpg' },
                { name: 'Pegase', file: 'Pegase.jpg' }
            ]
        });
    }

    submit = (ev) => {
        ev.preventDefault();

        this.props.services.servRoom.insertRoom(this.state.room).then(
            data => {
                console.log(this.state);
                this.setState({ message: 'La salle est ajoutée.' });
            }
        );
    }

    changeFormField = (ev) => {
        const room = Object.assign(this.state.room, { [ev.target.name]: ev.target.value });
        this.setState({ room: room });
    }

    handleClose = () => {
        this.setState({ message: '', typeMessage: 'success' });
    }

    render() {
        return (
            <div>
                <h2>Ajouter une salle</h2>

                <form noValidate onSubmit={this.submit}>
                    <div>
                        <TextField label="Nom" name="name" value={this.state.room.name || ''} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <TextField label="Prix" name="price" value={this.state.room.price || ''} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <TextField label="Sièges" name="seatCount" value={this.state.room.seatCount || ''} onChange={this.changeFormField} />
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel id="img">Image</InputLabel>
                            <Select id="image" labelId="img" name="image" value={this.state.room.image || ''}
                                onChange={this.changeFormField}>
                                {this.state.pictures && this.state.pictures.map((item, index) => (
                                    <MenuItem key={index} value={item.file}>{item.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <Button variant="contained" type="submit">Enregistrer</Button>
                    </div>
                </form>
                <Snackbar open={this.state.message !== ''} autoHideDuration={6000} onClose={this.handleClose}>
                    {(this.state.typeMessage === 'success' || this.state.typeMessage === '') && (
                        <Alert onClose={this.handleClose} severity="success">
                            {this.state.message}
                        </Alert>
                    )}
                    {this.state.typeMessage === 'error' && (
                        <Alert onClose={this.handleClose} severity="error">
                            {this.state.message}
                        </Alert>
                    )}
                </Snackbar>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    //console.log("store", store);
    return { services: { servRoom: store.services.serviceRoom } };
}

export default connect(mapStateToProps)(RoomAddPage);
