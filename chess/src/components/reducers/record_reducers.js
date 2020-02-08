import { 
    ADDRECORD,
    GETRECORD
} from "../actions/types";

const recordKey="_recordKey"
const INITIAL_STATE={
    record:JSON.parse(localStorage.getItem(recordKey))
}
export default function(state=INITIAL_STATE,action){
    switch(action.type){ 
        case ADDRECORD:
        return {...state, award:action.payload }
        
        case GETRECORD:
            return {...state, rec:action.payload }
         
        
        default:
            return state;
    }
}
