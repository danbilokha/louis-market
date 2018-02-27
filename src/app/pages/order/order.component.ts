import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup} from '@angular/forms';

import {ResoveRouteParam} from '@services/resolve-route-param';
import {ResoveWatchByName} from '@services/resolve-watch-by-name';
import {WatchService} from '@services/watch/watch';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {DbService} from '@db/dbService';
import {PreOrder} from './order.dictionary';

const ROUTE_ORDER_IDENTIFICATOR = 'name';

@Component({
    selector: 'louis-p-order',
    templateUrl: './order.template.html',
    styleUrls: ['./order.style.scss']
})
class OrderPageComponent extends ResoveRouteParam implements OnInit, OnDestroy, ResoveWatchByName {

    public watchSubscription: Subscription;
    public watch: Watch;

    public priceMap: object;

    public orderForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });

    constructor(protected route: ActivatedRoute,
                public watchService: WatchService,
                private dbService: DbService) {
        super(route, ROUTE_ORDER_IDENTIFICATOR);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestroy() {
        super.ngOnDestroy();

        this.watchSubscription.unsubscribe();
    }

    public catchRouteParam(watchName: string): void {
        this.watchSubscription = this.resovleWatchByName(watchName)
            .subscribe(watch => this.watchInit(watch));
    }

    public resovleWatchByName(watchName: string): Observable<Watch> {
        return this.watchService.getWatchByName(watchName);
    }

    public onClean(): void {
        this.orderForm.reset();
    }

    public onSubmit(): void {
        const orderForm = this.orderForm;
        this.dbService.setDbData('PREORDER',
            new PreOrder(
                orderForm.get('name').value,
                orderForm.get('phone').value,
                orderForm.get('email').value,
                this.watch
            ))
    }

    private watchInit(watch: Watch): void {
        this.watch = watch;
        this.priceMap = {
            currencyTo: 'UAH',
            discount: this.watch.discount,
            toFixed: 2
        };
    }

}

export {OrderPageComponent};
