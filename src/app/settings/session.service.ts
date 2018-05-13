import {Injectable} from '@angular/core';

import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {User} from '@pages/authentication/authentication.dictionary';
import {USER} from '@settings/constants';

@Injectable()
class SessionService {

    constructor(private storeLocalStorageService: StoreLocalStorageService) {
    }

    public isSignedUser(): boolean {
        if (this.storeLocalStorageService.isLocaStoragelKey(USER)) {
            return !!this.storeLocalStorageService.get(USER);
        } else {
            throw Error('No such field in local storage, or do not be their.');
        }
    }

    public getSignInUser(): User {
        if (this.storeLocalStorageService.isLocaStoragelKey(USER)) {
            return this.storeLocalStorageService.get(USER) as User;
        } else {
            throw Error('No such field in local storage, or do not be their.');
        }
    }
}

export {SessionService};
