// import {ToFixedNumberService} from './toFixed';
//
// describe("ToFixedNumberService", () => {
//
//     let sut: ToFixedNumberService;
//
//     beforeEach(() => {
//         sut = new ToFixedNumberService();
//     })
//
//     describe("transform", () => {
//
//         it('should set number to 3 numbers after the dot', () => {
//             expect(sut.transform(2, 3))
//                 .toBeCloseTo(2.000, 3);
//         })
//
//         it('should set number to 2 numbers after the dot', () => {
//             expect(sut.transform(2))
//                 .toBeCloseTo(2.00, 2);
//         })
//
//         it('should dont change the number', () => {
//             expect(sut.transform(2, 0))
//                 .toBeCloseTo(2,0);
//         })
//     })
// })
