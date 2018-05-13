import {Observable, Subscription, throwError as observableThrowError} from 'rxjs';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Watch} from '@dictionaries/watch.dictionary';
import {LouisImage} from '@dictionaries/image.dictionary';
import {DEFAULT_WATCH_IMAGE} from '@settings/constants';
import {WatchService} from './watch.service';
import {findWatchByName} from './watch.calculation';
import {catchError, skip, switchMap, withLatestFrom} from 'rxjs/internal/operators';
import {Order} from '@components/order/order.dictionary';

@Component({
    selector: 'louis-page-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchPageComponent implements OnInit, OnDestroy {

    public wantToBuy: boolean = false;
    public showSuccessBuyModal: boolean = false;
    public watch: Watch;
    public mainImage: LouisImage;
    private watchSubscription: Subscription = this.watchService
        .getWatches()
        .pipe(
            skip(1),
            withLatestFrom(this.route.paramMap,
                (watches, param) => {
                    if (param.has('name')) {
                        const watchName = param.get('name');
                        return findWatchByName(watchName)(watches);
                    } else {
                        observableThrowError('Not such watch');
                    }

                    // TODO: UNWORKED. NEED TO FIXED
                    if (param.has('order')) {
                        this.buyButton();
                    }
                }),
            catchError(error => {
                console.error(`Not found watch. Error: ${error.message}`);
                return Observable.of(undefined);
            }),
            switchMap(v => Observable.of(v[0]))
        )
        .subscribe(watch => {
            this.mainImage = this.getMainImage(watch.images);
            this.watch = watch;
        });

    constructor(private route: ActivatedRoute,
                private watchService: WatchService) {
    }

    ngOnInit() {
        this.watch = this.route.snapshot.data.watch;
        this.mainImage = this.watch.images
            ? this.getMainImage(this.watch.images)
            : new LouisImage(
                'Default watch image',
                0,
                'default image',
                `${DEFAULT_WATCH_IMAGE}`,
                true
            );
    }

    ngOnDestroy() {
        this.watchSubscription.unsubscribe();
    }

    public buyButton() {
        this.wantToBuy = !this.wantToBuy;
    }

    public orderWatch(order: Order) {
        this.watchService.makeOrder(order);
        this.showSuccessBuyModal = true;
    }

    private getMainImage(images: Array<LouisImage>): LouisImage {
        for (let i = 0, len = images.length; i < len; i += 1) {
            if (images[i].isMain) {
                return images[i];
            }
        }
        return images[0];
    }
}

export {WatchPageComponent};
