import {FETCH_REMOTE_DATA, REMOTE_DATA} from './store.action';

const initState = {
    data: null,
};

interface StoreState {
    data: any;
}

function storeReducer(state = initState, action): StoreState {
    console.log(action);
    switch (action.type) {
        case FETCH_REMOTE_DATA:
            return {
                ...state,
                ...initState
            };
        case REMOTE_DATA:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export {storeReducer};
