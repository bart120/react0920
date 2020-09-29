import axios from 'axios';

class BaseService {

    get(url) {
        return axios.get(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    post(url, obj) {
        return axios.post(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    post(url, obj) {
        return axios.put(url, obj).then(this.promiseResolve).catch(this.promiseReject);
    }

    delete(url) {
        return axios.delete(url).then(this.promiseResolve).catch(this.promiseReject);
    }

    promiseReject(err) {
        console.warn(err);
        return Promise.reject(err.message || err);
    }

    promiseResolve(resp) {
        if (resp.data == null) {
            return Promise.reject('La ressource est introuvable');
        }
        return Promise.resolve(resp.data);
    }

}

export default BaseService;
