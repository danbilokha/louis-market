import {CanActivate, Router} from '@angular/router';

import {SessionService} from './session.service';

abstract class AuthGuard implements CanActivate {

    constructor(protected router: Router,
                protected session: SessionService) {
    }

    canActivate(): boolean {
        return this.session.isSignedUser();
    }

    public redirectTo(url: string = '/home'): void {
        this.router.navigate([url]);
    }
}

export {AuthGuard};
