import {
    PRODUCT_DETAIL
} from './constants';

const initialState = {
    productDetail: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
        return {
            ...state,
            productDetail: action.payload
        }
        default:
            return state;
    }
}