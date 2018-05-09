// import {CurrencyResolverService} from './currency-resolver.service';
// import {usdTOuahCoef, eurTOuahCoef} from './currency-resolver.dictionary';
//
// describe('CurrencyResolverService', () => {
//     let sut: CurrencyResolverService;
//
//     beforeEach(() => {
//         sut = new CurrencyResolverService();
//     })
//
//     describe('getCurrentCurrency', () => {
//
//         it('should get default USD', () => {
//             expect(sut.getCurrentCurrency)
//                 .toBe('USD');
//         })
//
//         it('should get UAH', () => {
//             (sut as any)._currentCurrency = 'UAH';
//             expect(sut.getCurrentCurrency)
//                 .toBe('UAH');
//         })
//     })
//
//     describe('getCurrencyCoef', () => {
//
//         beforeEach(() => {
//             spyOn(sut, 'getCurrentCurrency')
//                 .and.returnValue('UAH');
//         })
//
//         it('should call with USD and UAH currency', () => {
//             spyOn(sut as any, 'getCurrencyCoef');
//             (sut as any).getCurrencyCoef('USD', 'UAH');
//
//             expect((sut as any).getCurrencyCoef)
//                 .toHaveBeenCalledWith('USD', 'UAH');
//         })
//
//         it('should get Coef for currency', () => {
//             spyOn((sut as any), 'resolveCurrencyCoef')
//                 .and.returnValue(usdTOuahCoef);
//
//             expect((sut as any).getCurrencyCoef('usd', 'uah'))
//                 .toBe(usdTOuahCoef);
//         })
//     })
//
//     describe('resolveCurrencyCoef', () => {
//
//         it('should call with USD and UAH currency', () => {
//             spyOn((sut as any), 'resolveCurrencyCoef');
//             (sut as any).resolveCurrencyCoef('USD', 'UAH');
//
//             expect((sut as any).resolveCurrencyCoef)
//                 .toHaveBeenCalledWith('USD', 'UAH');
//         })
//
//         it('should resolve the 1 if currency is the same', () => {
//             expect((sut as any).resolveCurrencyCoef('usd', 'usd'))
//                 .toBe(1);
//         })
//
//         it('should get currency coef the right for usd to uah', () => {
//             expect((sut as any).resolveCurrencyCoef('usd', 'uah'))
//                 .toBe(usdTOuahCoef);
//         })
//
//         it('should get currency coef the right for eur to uah', () => {
//             expect((sut as any).resolveCurrencyCoef('eur', 'uah'))
//                 .toBe(eurTOuahCoef);
//         })
//     })
//
//     describe('calculatePrice', () => {
//         it('should calculate currencyResolver when USD right', () => {
//             expect(sut.calculatePrice(2, 'USD'))
//                 .toBe(2);
//         })
//
//         it('should calculate currencyResolver when UAH right', () => {
//             expect(sut.calculatePrice(2, 'UAH'))
//                 .toBe(2 * usdTOuahCoef);
//         })
//     })
// })
