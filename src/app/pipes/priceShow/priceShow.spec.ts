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
    let priceMap: {
        currencyTo: string,
        discount: number,
        toFixed: number
    };

    beforeEach(() => {
        priceMap = {
            currencyTo: 'UAH',
            discount: 2,
            toFixed: 2
        };
        
        currencyResolverService = new CurrencyResolverService();
        
        calculatePricePipe = new CalculatePricePipe(currencyResolverService);
        discountPipe = new DiscountPipe();
        toFixedPipe = new ToFixedPipe();
        currencySignPipe = new CurrencySignPipe();
        
        

        sut = new PriceShowPipe(currencyResolverService);
    })

    describe('transform', () => {

        beforeEach(() => {
            spyOn(calculatePricePipe, 'transform');
            spyOn(discountPipe, 'transform');
            spyOn(toFixedPipe, 'transform');
            spyOn(currencySignPipe, 'transform');

            sut.transform(2, priceMap);
        })

        describe('should call currencySignPipe', () => {

            it('shoult have been called', () => {
                expect(currencySignPipe.transform)
                    .toHaveBeenCalled();
            })

            it('should have been called once', () => {
                expect(currencySignPipe.transform)
                    .toHaveBeenCalledTimes(1);
            })
        });
    })
})
