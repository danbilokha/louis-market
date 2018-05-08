import {CalculatePriceService} from './calculatePrice';
import {CurrencyResolverService} from 'app/shared/services/currencyResolver/currency-resolver.service';

describe('CalculatePriceService', () => {

    let sut: CalculatePriceService;
    let currencyResolverServiceMock: CurrencyResolverService;

    beforeEach(() => {
        currencyResolverServiceMock = new CurrencyResolverService();
        sut = new CalculatePriceService(currencyResolverServiceMock);
    });

    describe('transform', () => {
        it('should call currency resolve service', () => {
            spyOn(currencyResolverServiceMock, 'calculatePrice');
            sut.transform(2, 'UAH');

            expect(currencyResolverServiceMock.calculatePrice)
                .toHaveBeenCalled();
        });

        it('should return calculated value right', () => {
            spyOn(currencyResolverServiceMock, 'calculatePrice')
                .and.returnValue(4);

            expect(sut.transform(2, 'UAH'))
                .toBe(4);
        })
    })
});
