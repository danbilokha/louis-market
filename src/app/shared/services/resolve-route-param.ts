import {ActivatedRoute} from '@angular/router';
import {OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

abstract class ResoveRouteParam implements OnInit, OnDestroy {

    public paramSubscription: Subscription;

    constructor(protected route: ActivatedRoute, protected paramToResolve: string) {
    }

    ngOnInit() {
        this.paramSubscription = this.route.params.subscribe(param => {
            this.catchRouteParam(param[this.paramToResolve])
        })
    }

    ngOnDestroy() {
        this.paramSubscription.unsubscribe();
    }

    public abstract catchRouteParam(param: string): void;
}


export {ResoveRouteParam};
