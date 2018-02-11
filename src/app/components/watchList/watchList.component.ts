import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/take";

import {DbService} from '@db/dbService';
import {SCHEMA} from "@db/schema";
import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from "@components/watch//watch.dictionary";

@Component({
    selector: 'louis-watch-watchList',
    templateUrl: './watchList.template.html',
    styleUrls: ['./watchList.style.scss']
})
class WatchListComponent implements OnInit {

    @Input() skip: number = skipWatches;    
    @Input() take: number = takeWatches;

    public watchList$: Observable<Array<Watch>>;

    constructor(private dbService: DbService){
    }

    ngOnInit() {
        this.watchList$ = this.getWatchList(this.skip, this.take);
    }

    private getWatchList = (skip: number, take: number): Observable<Array<Watch>> => 
        this.dbService
            .getDbData(SCHEMA.WATCH, skip, take);

}

export {WatchListComponent};
