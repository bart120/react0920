//import axios from 'axios';
import BaseService from './BaseService';
import { URL_ROOMS } from './ConfigUrls';


class RoomService extends BaseService {

    getRooms() {
        return this.get(URL_ROOMS).then(data => {
            if (data.length > 10) {
                return Promise.reject("Trop d'éléments");
            } else {
                return Promise.resolve(data);
            }
        });
        /*return axios.get(URL_ROOMS).then(resp => {
            if (resp.data.length > 6) {
                return Promise.reject("Trop d'éléments");
            } else {
                return Promise.resolve(resp.data);
            }
        });*/

        /*.then(resp => {
            //console.log(resp.data);
            return resp.data;
        });*/

        //return [{ name: 'Salle 1' }, { name: 'Salle 2' }, { name: 'Salle 3' }];
    }

    getRoomById(id) {
        //return this.get(URL_ROOMS + "/" + id);
        return this.get(`${URL_ROOMS}/${id}`);
    }

    /**
     * Ajoute une salle via l'API
     * @param {room} Salle a ajouter
     */
    insertRoom(room) {
        return this.post(URL_ROOMS, room);
    }

    /**
     * fdsfs
     * @param {number} id id de la salle
     */
    deleteRoom(id) {
        return this.delete(`${URL_ROOMS}/${id}`);
    }
}

export default RoomService;