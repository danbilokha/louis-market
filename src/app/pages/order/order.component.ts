import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {WatchService} from '../watch/watch.service';
import {Watch} from '@dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import {PreOrder} from './order.dictionary';
import {filter, map, publishReplay, refCount, take, tap} from 'rxjs/internal/operators';

const ROUTE_ORDER_IDENTIFICATOR = 'name';

@Component({
    selector: 'louis-p-order',
    templateUrl: './order.template.html',
    styleUrls: ['./order.style.scss']
})
class OrderPageComponent  implements OnInit, OnDestroy {

    public watchSubscription: Subscription;
    public orderForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });

    private watchSink: BehaviorSubject<Watch> = new BehaviorSubject<Watch>(undefined);
    public watch: Observable<Watch> = this.watchSink
        .asObservable()
        .pipe(
            tap(v => console.log(v)),
            filter(v => !!v),
            publishReplay(1),
            refCount()
        );

    constructor(protected route: ActivatedRoute,
                public watchService: WatchService,
                private store: StoreService) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.watchSubscription.unsubscribe();
    }

    public onClean(): void {
        this.orderForm.reset();
    }

    public onSubmit(): void {
        const orderForm = this.orderForm;
        this.watch
            .pipe(
                take(1),
                map(watch => {
                    this.store.set('PREORDER',
                        new PreOrder(
                            orderForm.get('name').value,
                            orderForm.get('phone').value,
                            orderForm.get('email').value,
                            watch
                        ))
                })
            );
    }

    private watchInit(watch: Watch): void {
        this.watchSink.next(watch);
    }

}

export {OrderPageComponent};
