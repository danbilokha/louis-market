import {Injectable} from '@angular/core';
import {Subscription, Observable, BehaviorSubject} from 'rxjs';

import {Router} from '@angular/router';

import {StoreService} from '@store/store.service';
import {User} from './authentication.dictionary';
import {StoreExternalService} from '@store/external/store-external.service';
import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {cloneObject} from '@helpers/object';
import {USER} from '@settings/constants';

@Injectable()
class AuthorizationService {

    private usersRemoteData$: Observable<Array<User>> = this.storeExternalService
        .usersRemoteData$;
    private fetchLoginedUserSink$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

    public successfullyLoginedUser$: Observable<User> = this.fetchLoginedUserSink$
        .asObservable()
        .filter(v => !!v)
        .combineLatest(this.usersRemoteData$, (userData: User, usersRemoteData: Array<User>) => {
            for (let i = 0, len = usersRemoteData.length; i < len; i += 1) {
                if (usersRemoteData[i].login === userData.login
                    && usersRemoteData[i].password === userData.password) {
                    return usersRemoteData[i];
                }
            }

            return undefined;
        })
        .filter(v => !!v);

    private setSignInUserToLocalStore$: Subscription = this.successfullyLoginedUser$ // tslint:disable-line
        .subscribe((user: User) => {
            if (this.storeLocalStorageService.isLocaStoragelKey(USER)) {
                const _user: User = cloneObject(user);

                delete _user.password;

                this.storeLocalStorageService.removeItem(USER);
                this.storeLocalStorageService.set(USER, _user);
            }
            this.navigateAfterSignIn();
        });

    constructor(private router: Router,
                private store: StoreService,
                private storeLocalStorageService: StoreLocalStorageService,
                private storeExternalService: StoreExternalService) {
    }

    public signUp(user: User): void {
        this.store.set('USER', user);
        this.navigateAfterSignUp();
    }

    public signIn(user: User): void {
        this.fetchLoginedUserSink$.next(user);
    }

    private navigateAfterSignUp(): void {
        this.router.navigate(['/home']);
    }

    private navigateAfterSignIn(): void {
        this.router.navigate(['/home']);
    }
}

export {AuthorizationService};
