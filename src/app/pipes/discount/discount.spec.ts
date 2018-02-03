import {DiscountPipe} from './discount';

describe("DiscountPipe", () => {

    let sut: DiscountPipe;

    beforeEach(() => {
        sut = new DiscountPipe();
    })

    describe("transform", () => {

        it('should calculate right discount', () => {
            expect(sut.transform(10, 10))
                .toBe(9);
        });
    })
})