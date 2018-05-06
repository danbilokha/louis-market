import {AddSpacePipe} from './addSpace';

describe('AddSpacePipe', () => {

    sut: AddSpacePipe;

    beforeEach(() => {
        sut = new AddSpacePipe();
    })

    describe('transform', () => {

        it('should set space if number is large', () => {
            expect(sut.transform('50000'))
                .toBe('50 000');
        })

        it('should not set space if number is large', () => {
            expect(sut.transform('5000'))
                .toBe('5000');
        })
    })
})
