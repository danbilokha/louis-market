import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {AuthGuard} from './AuthGuard';

import {SessionService} from './session.service';

@Injectable()
class NonSignInGuard extends AuthGuard {

    constructor(protected router: Router,
                protected session: SessionService) {
        super(router, session);
    }

    canActivate(): boolean {
        const canActivate: boolean = !super.canActivate();

        if (!canActivate) {
            super.redirectTo('/home');
        }

        return canActivate;
    }
}

export {NonSignInGuard};
