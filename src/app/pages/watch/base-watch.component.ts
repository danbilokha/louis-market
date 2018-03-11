import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Watch} from '@common/dictionaries/watch.dictionary';

import {WatchService} from '@services/watch/watch.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'louis-base-watch-page',
    templateUrl: './base-watch.template.html'
})
class BaseWatchPageComponent implements OnInit, OnDestroy {

    public watch: Watch;
    private routeSubscription: Subscription;
    private watchServiceSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private watchService: WatchService) {
    }

    ngOnInit() {
        this.routeSubscription = this.route.params
            .subscribe(params => {
                this.watchServiceSubscription = this.watchService
                    .getWatchByName(params['name'])
                    .subscribe(watch => this.watch = watch);
        })
    }

    ngOnDestroy() {
        this.routeSubscription.unsubscribe();
        this.watchServiceSubscription.unsubscribe();

    }

}

export {BaseWatchPageComponent};
