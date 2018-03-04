import {Action} from '@ngrx/store';

const FETCH_REMOTE_DATA = 'FETCH_REMOTE_DATA';
const REMOTE_DATA = 'REMOTE_DATA';

class FetchRemoteData implements Action {

    public type: string = FETCH_REMOTE_DATA;
}

class RemoteData implements Action {

    public type: string = REMOTE_DATA;

    constructor(public payload: any) {
    }
}

const initState = {
    remoteData: null,
};

const remoteReducer = (state = initState, action): any => {
    switch (action.type) {
        case FETCH_REMOTE_DATA:
            return {
                ...state,
                ...initState
            };
        case REMOTE_DATA:
            return {
                ...state,
                remoteData: action.payload
            };
        default:
            return state;
    }
};

export {FetchRemoteData, RemoteData, remoteReducer};
