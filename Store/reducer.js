import {
    GET_CHARACTER
} from './action'

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                dataReducer: action.data
            }        
        default:
            return state;
    }
}