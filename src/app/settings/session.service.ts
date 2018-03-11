import {Injectable} from '@angular/core';

import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {LocalStorageNamespace} from '@store/store.dictionary';
import {User} from '@pages/authorization/authorization.dictionary';
import {Observable} from 'rxjs/Observable';

@Injectable()
class SessionService {

    constructor(private storeLocalStorageService: StoreLocalStorageService) {
    }

    public isSignedUser(): boolean {
        return !!this.storeLocalStorageService.get(LocalStorageNamespace.User.toString());
    }

    public getSignInUser(): User {
        return this.storeLocalStorageService.get(LocalStorageNamespace.User.toString()) as User;
    }
}

export {SessionService};
