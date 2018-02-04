import {CalculatePricePipe} from './calculatePrice';
import {CurrencyResolverService} from '@services/price/currency-resolver';

describe('CalculatePricePipe', () => {

    let sut: CalculatePricePipe;
    let currencyResolverServiceMock: CurrencyResolverService;

    beforeEach(() => {
        currencyResolverServiceMock = new CurrencyResolverService();
        sut = new CalculatePricePipe(currencyResolverServiceMock);
    })
    
    describe('transform', () => {
        it('should call currency resolve service', () => {
            spyOn(currencyResolverServiceMock, 'calculatePrice');
            sut.transform(2, 'UAH');

            expect(currencyResolverServiceMock.calculatePrice)
                .toHaveBeenCalled();
        })

        it('should return calculated value right', () => {
            spyOn(currencyResolverServiceMock, 'calculatePrice')
                .and.returnValue(4);

            expect(sut.transform(2, 'UAH'))
                .toBe(4);
        })
    })
})
