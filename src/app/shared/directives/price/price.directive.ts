import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PriceWithDiscountComponent} from '@louis/components/price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from '@louis/components/price/withoutDiscount/priceWithoutDiscount.component';
import {Observable, Subscription, BehaviorSubject} from 'rxjs';
import {Currency} from '@services/currency/currency.dictionary';
import {TransformPriceService} from '@services/transformPrice/transformPrice.service';

const PRICE_WITHOUT_DISCOUNT: number = 0;
const DEFAULT_FLOAT_NUMBER: number = 2;
const DEFAULT_CURRENCY: Currency = Currency.UAH;

@Directive({
    selector: '[louisPrice]'
})
class PriceDirective implements OnInit, OnDestroy {

    @Input()
    discount: number;

    @Input()
    set price(value: number) {
        this.priceSink.next(value);
    };

    private priceSink: BehaviorSubject<number> = new BehaviorSubject<number>(undefined);
    private price$: Observable<number> = this.priceSink
        .asObservable()
        .filter(v => !!v)
        .switchMap(price => this.transformPriceService
            .transform(price, {currencyTo: DEFAULT_CURRENCY, discount: PRICE_WITHOUT_DISCOUNT, toFixed: DEFAULT_FLOAT_NUMBER}));
    private newPrice$: Observable<number> = this.priceSink
        .asObservable()
        .filter(v => !!v)
        .switchMap(price => this.transformPriceService
                .transform(price, {currencyTo: DEFAULT_CURRENCY, discount: this.discount, toFixed: DEFAULT_FLOAT_NUMBER}));


    private priceSubscription: Subscription = this.price$
        .combineLatest(this.newPrice$)
        .subscribe(prices => {
            this.componentRef.instance.price = prices[0];
            if (this.componentRef.instance instanceof PriceWithDiscountComponent) {
                this.componentRef.instance.newPrice = prices[1];
            }
        });

    private componentRef: ComponentRef<PriceWithDiscountComponent | PriceWithoutDiscountComponent>;

    constructor(private containerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private transformPriceService: TransformPriceService) {
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
