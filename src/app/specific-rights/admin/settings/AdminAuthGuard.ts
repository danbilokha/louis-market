import {Injectable} from '@angular/core';
import {CanActivateChild, Router} from '@angular/router';
import {AuthGuard} from '@settings/AuthGuard';
import {SessionService} from '@settings/session.service';
import {User, UserRole} from '@pages/authorization/authorization.dictionary';

@Injectable()
class AdminAuthGuard extends AuthGuard implements CanActivateChild {

    constructor(protected router: Router,
                protected session: SessionService) {
        super(router, session);
    }

    canActivate(): boolean {
        let canActive: boolean = super.canActivate();
        if (!canActive) {
            super.redirectTo('/sign-in');
        } else {
            const user: User = this.session.getSignInUser();

            canActive = user.role === UserRole.admin;
            if (!canActive) {
                super.redirectTo('/home');
            }
        }

        return canActive;
    }

    public canActivateChild(): boolean {
        return this.canActivate();
    }
}

export {AdminAuthGuard};
