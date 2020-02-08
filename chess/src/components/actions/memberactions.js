import axios from 'axios';
import {
    REGISTER_USER,
    LOGIN_USER,
    logoutuser
} from './types';

import { MEMBER_SERVER } from '../utils/misc';


export function registeruser(data){
    const request = axios.post(`${MEMBER_SERVER}/register`,data)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}



export function loginuser(data){
    const request = axios.post(`${MEMBER_SERVER}/login`,data)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}




export function log(){
    const request = axios.get(`${MEMBER_SERVER}/logout`)
     .then(response => response.data);
 
 return {
     type:logoutuser,
     payload: request
 }
}