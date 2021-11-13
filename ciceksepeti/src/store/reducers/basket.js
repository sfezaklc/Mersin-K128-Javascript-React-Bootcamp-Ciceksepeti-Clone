import {
    ADD_BASKET,
    GET_BASKET,
} from './constants';
const initialState = {
    basketList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET:
            if (JSON.parse(localStorage.getItem("basket") == null)) {
                return {
                    ...state,
                    basketList: [...state.basketList, action.payload],
                }
            }
            else {
                return {
                    ...state,
                    basketList: [...JSON.parse(localStorage.getItem("basket")), action.payload]
                }
            }
        case GET_BASKET:
            return {
                ...state,
                basketList: action.payload
            }
        default:
            return state;
    }
}