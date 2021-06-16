import { FETCH_INVENTORY_ERROR, FETCH_INVENTORY_INIT, FETCH_INVENTORY_SUCCESS, TOGGLE_OPEN, UPDATE_SELECTION } from ".";
import app from "../store/firebaseConfig";
const database = app.database();

export const updateSelection = (data) => ({
    type: UPDATE_SELECTION,
    payload: data
});

export const toggleAddInventoryForm = () => ({
    type: TOGGLE_OPEN
});

export const getInventoryInit = () => ({
    type: FETCH_INVENTORY_INIT
});

export const getInventorySuccess = (data) => ({
    type: FETCH_INVENTORY_SUCCESS,
    payload: data
});

export const getInventoryError = (error) => ({
    type: FETCH_INVENTORY_ERROR,
    error: error
});

export const fetchInventoryFromFirebase = (instance) => {
    return async function(dispatch) {
        dispatch(getInventoryInit());

        try{
            database.ref(instance).on("value", (snapshot) => {
                if(snapshot) {
                    dispatch(getInventorySuccess(snapshot.val()));
                }
            });
        }catch(err) {
            dispatch(getInventoryError(err.message));
        }
    }
}

export const addInventoryToFirebase = (instance, data) => {
    return async function(dispatch) {
        try {
            database.ref(instance).set(data);
        }catch(err) {
            console.error(err);
        }
    }
}

export const removeItemFromFirebase = (instance) => {
    return async function() {
        try {
            database.ref(instance).remove();
        }catch(err) {
            console.error(err);
        }
    }
}
