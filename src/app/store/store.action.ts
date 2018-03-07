import {Action} from '@ngrx/store';

const FETCH_REMOTE_DATA = 'FETCH_REMOTE_DATA';
const FETCHING_REMOTE_DATA = 'FETCHING_REMOTE_DATA';
const FETCHING_REMOTE_DATA_SUCCESS = 'FETCHING_REMOTE_DATA_SUCCESS';
const FETCHING_REMOTE_DATA_ERROR = 'FETCHING_REMOTE_DATA_ERROR';
const REMOTE_DATA = 'REMOTE_DATA';
const PUSH_REMOTE_DATA = 'PUSH_REMOTE_DATA';

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

    constructor(public payload: any) {
    }
}

class RemoteData implements Action {

    public type: string = REMOTE_DATA;

    constructor(public payload: any) {
    }
}

class PushRemoteData implements Action {
    public type: string = PUSH_REMOTE_DATA;

    constructor(public payload: any) {
    }
}

const type = FetchRemoteData ||
    FetchingRemoteData ||
    FetchingRemoteDataError ||
    FetchingRemoteDataSuccess ||
    RemoteData ||
    PushRemoteData;

export {
    FETCH_REMOTE_DATA,
    FETCHING_REMOTE_DATA,
    FETCHING_REMOTE_DATA_SUCCESS,
    FETCHING_REMOTE_DATA_ERROR,
    REMOTE_DATA,
    PUSH_REMOTE_DATA,
    FetchRemoteData,
    FetchingRemoteData,
    FetchingRemoteDataError,
    FetchingRemoteDataSuccess,
    RemoteData,
    PushRemoteData,
    type
};
