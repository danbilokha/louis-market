import {Injectable} from '@angular/core';

import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {LOCAL_STORAGE_NAMESPACE} from '@store/store.dictionary';
import {User} from '@pages/authentication/authentication.dictionary';

const USER_LOCAL_STORAGE_KEY = 'user';

@Injectable()
class SessionService {

    constructor(private storeLocalStorageService: StoreLocalStorageService) {
    }

    public isSignedUser(): boolean {
        if (LOCAL_STORAGE_NAMESPACE.has(USER_LOCAL_STORAGE_KEY)) {
            return !!this.storeLocalStorageService.get(USER_LOCAL_STORAGE_KEY);
        } else {
            throw Error('No such field in local storage, or do not be their.');
        }
    }

    public getSignInUser(): User {
        if (LOCAL_STORAGE_NAMESPACE.has(USER_LOCAL_STORAGE_KEY)) {
            return this.storeLocalStorageService.get(USER_LOCAL_STORAGE_KEY) as User;
        } else {
            throw Error('No such field in local storage, or do not be their.');
        }
    }
}

export {SessionService};
