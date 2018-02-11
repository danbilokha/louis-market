import {WatchListComponent} from './watchList.component';
import {takeWatches, skipWatches} from './watchList.dictionary';
import {SCHEMA} from "@db/schema";

describe('WatchListComponent', () => {
    let sut: WatchListComponent;
    let dbService: any;

    beforeEach(() => {
        dbService = {
            getDbData: jasmine.createSpy('getDbData')
        };

        sut = new WatchListComponent(dbService);
    })

    it('should set default take value', () => {
        expect(sut.take)
            .toBe(takeWatches)
    })

    it('should set deafult skip value', () => {
        expect(sut.skip)
            .toBe(skipWatches)
    })

    describe('ngOnInit', () => {
        it('should call getWatchList', () => {
            sut.ngOnInit();

            expect(sut.skip)
            .toBe(skipWatches)
        })
    })

    describe('getWatchList', () => {
        it('should call getDbData', () => {
            (sut as any).getWatchList(0, 50);

            expect(dbService.getDbData)
                .toHaveBeenCalledWith(SCHEMA.WATCH);
        })
    })
})
