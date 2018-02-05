import {PriceShowPipe} from './priceShow';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CurrencyResolverService} from '@services/price/currency-resolver';

describe('PriceProcessChangePipe', () => {
    
    let sut: PriceShowPipe;
    let currencyResolverService: CurrencyResolverService;
    let calculatePricePipe: CalculatePricePipe;
    let discountPipe: DiscountPipe;
    let toFixedPipe: ToFixedPipe;
    let currencySignPipe: CurrencySignPipe;
    let priceMap: object;

    beforeEach(() => {
        priceMap = {
            currencyTo: 'UAH',
            discount: 2,
            toFixed: 2
        };

        spyOn(calculatePricePipe, 'transform');
        spyOn(discountPipe, 'transform');
        spyOn(toFixedPipe, 'transform');
        spyOn(currencySignPipe, 'transform');
        sut = new PriceShowPipe(currencyResolverService);
    })

    describe('transform', () => {
        it('shoult call all the related pipes', () => {
            sut.transform(2, priceMap);

            calculatePricePipe.transform(2, 'UAH');
            discountPipe.transform(2, 2);
            toFixedPipe.transform(2, 2);
            currencySignPipe.transform(2, 'UAH');

            expect(calculatePricePipe.transform)
                .toHaveBeenCalled();
            expect(calculatePricePipe.transform)
                .toHaveBeenCalledTimes(1);
        })
    })
})