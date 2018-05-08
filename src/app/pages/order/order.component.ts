import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {FormControl, FormGroup} from '@angular/forms';

import {ResoveRouteParam} from '@services/resolve-route-param';
import {ResoveWatchByName} from '@services/resolve-watch-by-name';
import {WatchService} from '../watch/watch.service';
import {Watch} from '@dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import {PreOrder} from './order.dictionary';
import {findWatchByName} from '@pages/watch/watch.calculation';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const ROUTE_ORDER_IDENTIFICATOR = 'name';

@Component({
    selector: 'louis-p-order',
    templateUrl: './order.template.html',
    styleUrls: ['./order.style.scss']
})
class OrderPageComponent extends ResoveRouteParam implements OnInit, OnDestroy, ResoveWatchByName {

    public watchSubscription: Subscription;
    public priceMap: object;
    public orderForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });

    private watchSink: BehaviorSubject<Watch> = new BehaviorSubject<Watch>(undefined);
    public watch: Observable<Watch> = this.watchSink
        .asObservable()
        .filter(v => !!v)
        .publishReplay(1)
        .refCount();

    constructor(protected route: ActivatedRoute,
                public watchService: WatchService,
                private store: StoreService) {
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
            .subscribe(watch => this.watchInit(watch[0]));
    }

    public resovleWatchByName(watchName: string): Observable<Watch> {
        return this.watchService
            .getWatches()
            .map(findWatchByName(watchName));
    }

    public onClean(): void {
        this.orderForm.reset();
    }

    public onSubmit(): void {
        console.log('submit');
        const orderForm = this.orderForm;
        this.watch
            .take(1)
            .map(watch => {
                console.log('Order 1', watch);
                this.store.set('PREORDER',
                    new PreOrder(
                        orderForm.get('name').value,
                        orderForm.get('phone').value,
                        orderForm.get('email').value,
                        watch
                    ))
            });
    }

    private watchInit(watch: Watch): void {
        this.watchSink.next(watch);

        // TODO: Remove all currencyResolver map - what hell is that?
        this.priceMap = {
            currencyTo: 'UAH',
            discount: watch.discount,
            toFixed: 2
        };
    }

}

export {OrderPageComponent};
