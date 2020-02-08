import { 
    REGISTER_USER,
    LOGIN_USER,
    AUTH_USER,
    logoutuser
} from "../actions/types";

const memberKey="_memberKey"
const INITIAL_STATE={
    member:JSON.parse(localStorage.getItem(memberKey))
}
export default function(state=INITIAL_STATE,action){
    switch(action.type){ 
        case REGISTER_USER:
        return {...state, register: action.payload }
        case LOGIN_USER:
            return {...state,member:action.payload}
           
               
            case logoutuser:
                    return  {...state,member:{
                        member:{},
                        loginSuccess:false,
                          logoutSuccess:action.payload
                        }
                      }
             default:
            return state;
    }
}