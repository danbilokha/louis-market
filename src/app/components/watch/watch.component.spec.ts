import {WatchComponent} from './watch.component';

describe('WatchComponent', () => {

    let sut: WatchComponent;

    beforeEach(() => {
        sut = new WatchComponent();
    });

    describe('onWatchTap', () => {
        it('should emit tapped watch', () => {
            const tappedWatch = {} as any;

            sut.onWatchTap(tappedWatch);

            expect(sut.watchTaped)
                .toHaveBeenCalledWith(tappedWatch);
        })
    });
});
