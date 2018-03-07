import {storeReducer} from './store.reducer';

interface AppState {
    data: any;
}

const appReducers = {
    data: storeReducer
};

export {
    AppState,
    appReducers
};
