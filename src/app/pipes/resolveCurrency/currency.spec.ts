import {CurrencyPipe} from './currency';

describe('CurrencyPipe', () => {

    let sut: CurrencyPipe;

    beforeEach(() => {
        sut = new CurrencyPipe();
    })

    describe('transform', () => {

        it('should set UAH as a default', () => {
            expect(sut.transform(2))
                .toBe('2 UAH')
        })

        it('should set UAH', () => {
            expect(sut.transform(2, 'uah'))
                .toBe('2 UAH')
        })

        it('should set USD', () => {
            expect(sut.transform(2, 'usd'))
                .toBe('2 USD')
        })

        it('should set EUR', () => {
            expect(sut.transform(2, 'eur'))
                .toBe('2 EUR')
        })
    })

})