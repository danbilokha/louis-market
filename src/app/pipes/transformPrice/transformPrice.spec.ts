import {PriceShowPipe} from './transformPrice';

describe('PriceProcessChangePipe', () => {

    let sut: PriceShowPipe;

    let currencyResolverService: any;

    let calculatePricePipe: any;
    let discountPipe: any;
    let toFixedPipe: any;
    let currencySignPipe: any;

    let priceMap: {
        currencyTo: string,
        discount: number,
        toFixed: number
    };

    beforeEach(() => {
        priceMap = {
            currencyTo: 'UAH',
            discount: 0,
            toFixed: 2
        };

        currencyResolverService = {
            calculatePrice: jasmine.createSpy('calculatePrice')
        };

        calculatePricePipe = {
            transform: jasmine.createSpy('transform')
                .and.returnValue(2)
        };
        discountPipe = {
            transform: jasmine.createSpy('transform')
                .and.returnValue(3)
        };
        toFixedPipe = {
            transform: jasmine.createSpy('transform')
                .and.returnValue('3.00')
        };
        currencySignPipe = {
            transform: jasmine.createSpy('transform')
        };

        sut = new PriceShowPipe(currencyResolverService, currencySignPipe, toFixedPipe);
    })

    describe('transform', () => {

        beforeEach(() => {
            sut.transform(2, priceMap);
        })

        describe('currencySignPipe', () => {
            it('should have been called', () => {
                expect(currencySignPipe.transform)
                    .toHaveBeenCalledWith('3.00', priceMap.currencyTo);
            })

            it('should have been called once', () => {
                expect(currencySignPipe.transform)
                    .toHaveBeenCalledTimes(1);
            })
        });

        describe('toFixedPipe', () => {
            it('should have been called', () => {
                expect(toFixedPipe.transform)
                    .toHaveBeenCalledWith(3, priceMap.toFixed);
            })

            it('should have been called once', () => {
                expect(toFixedPipe.transform)
                    .toHaveBeenCalledTimes(1);
            })
        });

        describe('discountPipe', () => {

            it('should have been called', () => {
                expect(discountPipe.transform)
                    .toHaveBeenCalledWith(2, priceMap.discount);
            })

            it('should have been called once', () => {
                expect(calculatePricePipe.transform)
                    .toHaveBeenCalledTimes(1);
            })

        });

        describe('calculatePricePipe', () => {

            it('should have been called', () => {
                expect(calculatePricePipe.transform)
                    .toHaveBeenCalledWith(2, priceMap.currencyTo);
            })

            it('should have been called once', () => {
                expect(calculatePricePipe.transform)
                    .toHaveBeenCalledTimes(1);
            })

        });
    })
})
