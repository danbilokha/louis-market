import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
class AdminAuthGuard implements CanActivate {


    constructor(private router: Router) {
    }

    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }

}