import { FETCH_INVENTORY_ERROR, FETCH_INVENTORY_INIT, FETCH_INVENTORY_SUCCESS, TOGGLE_OPEN, UPDATE_SELECTION } from "../actions"

const initialState = {
    loading: false,
    error: null,
    inventory: {
        mobiles: [],
        laptops: [],
        appliances: [],
    },
    selected: 'mobiles',
    open: false
}

export const inventoryReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_INVENTORY_INIT: return {...state, loading: true};
        case FETCH_INVENTORY_SUCCESS: return {...state, loading: false, error: null, inventory: action.payload};
        case FETCH_INVENTORY_ERROR: return {...state, error: action.error};
        case UPDATE_SELECTION: return {...state, selected: action.payload};
        case TOGGLE_OPEN: return {...state, open: !state.open};
        default: return state;
    }
}