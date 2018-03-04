import {Action} from '@ngrx/store';

const FETCH_REMOTE_DATA = 'FETCH_REMOTE_DATA';
const FETCHING_REMOTE_DATA = 'FETCHING_REMOTE_DATA';
const FETCHING_REMOTE_DATA_SUCCESS = 'FETCHING_REMOTE_DATA_SUCCESS';
const FETCHING_REMOTE_DATA_ERROR = 'FETCHING_REMOTE_DATA_ERROR';

const REMOTE_DATA = 'REMOTE_DATA';

class FetchRemoteData implements Action {

    public type: string = FETCH_REMOTE_DATA;
}
class FetchingRemoteData implements Action {

    public type: string = FETCHING_REMOTE_DATA;
}

class FetchingRemoteDataError implements Action {

    public type: string = FETCHING_REMOTE_DATA_ERROR;
}

class FetchingRemoteDataSuccess implements Action {

    public type: string = FETCHING_REMOTE_DATA_SUCCESS;
}

class RemoteData implements Action {

    public type: string = REMOTE_DATA;

    constructor(public payload: any) {
    }
}

const initState = {
    remoteData: null,
};

function remoteReducer(state = initState, action): any {
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

export {
    FETCH_REMOTE_DATA,
    REMOTE_DATA,
    FetchRemoteData,
    FetchingRemoteData,
    FetchingRemoteDataSuccess,
    FetchingRemoteDataError,
    RemoteData,
    remoteReducer
};
