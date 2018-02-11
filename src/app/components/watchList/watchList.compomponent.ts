import {Component} from '@angular/core';
import {DbService} from '@db/dbService';
import {SCHEMA, Watch} from "@louis";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/take";

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
