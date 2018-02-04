import {CurrencyPipe} from './currency';
import {CurrencyResolverService} from '@services/price/currency-resolver';


describe('CurrencyPipe', () => {

    let sut: CurrencyPipe;
    let currencyResolverMock: CurrencyResolverService;

    beforeEach(() => {
        currencyResolverMock = new CurrencyResolverService();
        spyOn(currencyResolverMock, 'getCurrentCurrency');
        sut = new CurrencyPipe(currencyResolverMock);
    })

    describe('transform', () => {

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