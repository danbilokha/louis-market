import {CurrencyPipe} from './currency';
import {CurrencyResolverService} from '@services/price/currency-resolver';


describe('CurrencyPipe', () => {

    let sut: CurrencyPipe;
    let currencyResolverMock: CurrencyResolverService;

    beforeEach(() => {
        currencyResolverMock = new CurrencyResolverService();
        sut = new CurrencyPipe(currencyResolverMock);
    })

    describe('transform', () => {

        it('should set UAH', () => {
            (currencyResolverMock as any)._currentCurrency = 'UAH';

            expect(sut.transform(2))
                .toBe('2 UAH')
        })

        it('should set USD', () => {
            (currencyResolverMock as any)._currentCurrency = 'USD';

            expect(sut.transform(2))
                .toBe('2 USD')
        })

        it('should set EUR', () => {
            (currencyResolverMock as any)._currentCurrency = 'EUR';

            expect(sut.transform(2))
                .toBe('2 EUR')
        })
    })

})