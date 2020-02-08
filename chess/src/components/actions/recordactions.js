import axios from 'axios';
import {
    ADDDETAIL,
    ADDRECORD,
    GETRECORD
} from './types';

import { RECORD_SERVER } from '../utils/misc';


export function adddetails(data,_id){
    const request = axios.post(`${RECORD_SERVER}/adddetail?id=${_id}`,data)
        .then(response => response.data);
    
    return {
        type: ADDDETAIL,
        payload: request
    }
}


export function getrecords(){
    const request = axios.get(`${RECORD_SERVER}/getrecords`)
        .then(response => response.data);
    
    return {
        type: GETRECORD,
        payload: request
    }
}

export function addrecord(data,email){
    console.log(data)
    const request = axios.post(`${RECORD_SERVER}/records`,data)
        .then(response => response.data);
    
    return {
        type: ADDRECORD,
        payload: request
    }
}
