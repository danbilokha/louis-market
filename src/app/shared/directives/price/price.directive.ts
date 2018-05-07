import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import {PriceWithDiscountComponent} from 'app/components/price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from 'app/components/price/withoutDiscount/priceWithoutDiscount.component';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Directive({
    selector: '[louisPrice]'
})
class PriceDirective implements OnInit, OnDestroy {

    @Input()
    price: Observable<number>;

    @Input()
    discount: boolean;

    componentRef: ComponentRef<PriceWithDiscountComponent | PriceWithoutDiscountComponent>;

    private priceSubscription: Subscription = this.price
        .filter(v => !!v)
        .subscribe(price => this.componentRef.instance.price = price);

    constructor(private containerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        const componentToCreate = this.discount ? PriceWithDiscountComponent : PriceWithoutDiscountComponent;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

        this.componentRef = this.containerRef.createComponent(componentFactory);
    }

    ngOnDestroy() {
        this.priceSubscription.unsubscribe();
    }
}

export {PriceDirective};
