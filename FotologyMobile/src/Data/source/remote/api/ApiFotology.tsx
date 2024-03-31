import axios from 'axios';

const ApiFotology = axios.create({
        //baseURL: 'http://192.168.20.174:3202/api',
        baseURL: 'http://192.168.20.174:3202/api',
        headers: {
        'Content-Type': 'application/json'
    }
});

const ApiFotologyForImage = axios.create({
    baseURL: 'http://192.168.20.174:3202/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    }
})

export {ApiFotology, ApiFotologyForImage};