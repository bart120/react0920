import React, { Component } from 'react'
import { connect } from 'react-redux';
//import RoomService from '../../services/RoomService';

export class RoomDetailPage extends Component {

    state = { room: null };

    //servRoom = new RoomService();
    //console.log(this.props.match.params.id);

    componentDidMount() {

        /* this.props.services.servRoom.getRoomById(this.props.match.params.id).then(data => {
             this.setState({ room: data });
         });*/
        this.setState({ room: this.props.location.state.room });
    }

    render() {
        const room = this.state.room;
        return (
            <div>
                {room &&
                    <>
                        <h1>Salle {room.name}</h1>
                        <p>{room.price} €</p>
                        <p>{room.seatCount} sièges</p>
                        <img src={`/images/${room.image}`} alt={room.name} />
                    </>
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return { services: { servRoom: store.serviceRoom } };
}

export default connect(mapStateToProps)(RoomDetailPage)
