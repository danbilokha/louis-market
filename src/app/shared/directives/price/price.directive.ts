import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PriceWithDiscountComponent} from '@louis/components/price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from '@louis/components/price/withoutDiscount/priceWithoutDiscount.component';
import {Observable, Subscription, BehaviorSubject} from 'rxjs';
import {combineLatest, zip} from 'rxjs';
import {Currency} from '@services/currency/currency.dictionary';
import {TransformPriceService} from '@services/transformPrice/transformPrice.service';
import {map, tap} from 'rxjs/internal/operators';

const PRICE_WITHOUT_DISCOUNT: number = 0;
const DEFAULT_FLOAT_NUMBER: number = 2;
const DEFAULT_CURRENCY: Currency = Currency.UAH;

@Directive({
    selector: '[louisPrice]'
})
class PriceDirective implements OnInit, OnDestroy {

    @Input()
    discount: number;

    private priceSink: BehaviorSubject<number> = new BehaviorSubject<number>(undefined);
    private basePrice$: Observable<number> = this.priceSink
        .asObservable()
        .filter(v => !!v);
    private currencySink: BehaviorSubject<Currency> = new BehaviorSubject<Currency>(undefined);
    private currency$: Observable<Currency> = this.currencySink
        .asObservable()
        .filter(v => !!v);
    private calculatedPrice$: Observable<number> = zip(this.basePrice$, this.currency$)
        .switchMap((v) => this.transformPriceService
            .transform(v[0], v[1], {currencyTo: DEFAULT_CURRENCY, discount: PRICE_WITHOUT_DISCOUNT, toFixed: DEFAULT_FLOAT_NUMBER}));
    private calculatedNewPrice$: Observable<number> = zip(this.basePrice$, this.currency$)
        .switchMap((v) => this.transformPriceService
            .transform(v[0], v[1], {currencyTo: DEFAULT_CURRENCY, discount: this.discount, toFixed: DEFAULT_FLOAT_NUMBER}));
    private componentRef: ComponentRef<PriceWithDiscountComponent | PriceWithoutDiscountComponent>;
    private priceSubscription: Subscription = combineLatest(this.calculatedPrice$, this.calculatedNewPrice$)
        .subscribe(prices => {
            this.componentRef.instance.price = prices[0];
            if (this.componentRef.instance instanceof PriceWithDiscountComponent) {
                this.componentRef.instance.newPrice = prices[1];
            }
        });

    constructor(private containerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private transformPriceService: TransformPriceService) {
    }

    @Input()
    set price(value: number) {
        this.priceSink.next(value);
    };

    @Input()
    set currency(currency: Currency) {
        this.currencySink.next(currency);
    }

    ngOnInit() {
        const componentToCreate = this.discount || this.discount > 0
            ? PriceWithDiscountComponent
            : PriceWithoutDiscountComponent;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

        this.componentRef = this.containerRef.createComponent(componentFactory);
    }

    ngOnDestroy() {
        this.priceSubscription.unsubscribe();
    }
}

export {PriceDirective};
