import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/take";

import {DbService} from '@db/dbService';
import {SCHEMA} from "@db/schema";
import {Watch} from "@components/watch//watch.dictionary";

@Component({
    selector: 'louis-watch-watchList',
    templateUrl: './watchList.template.html',
    styleUrls: ['./watchList.style.scss']
})
class WatchListComponent {

    constructor(private dbService: DbService){

    }

    public getWatchList(take?: number): Observable<Array<Watch>> {
        return this.dbService.getDbData(SCHEMA.WATCH).take(take);
    }

}

export {WatchListComponent};
