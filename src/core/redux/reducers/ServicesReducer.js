import RoomService from '../../../services/RoomService';

const INITIAL_STATE = {
    serviceRoom: new RoomService()
}

export default (state = INITIAL_STATE, action) => {
    return state;
}

