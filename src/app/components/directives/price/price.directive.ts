import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnInit, ViewContainerRef
} from '@angular/core';
import {PriceWithDiscountComponent} from 'app/components/price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from 'app/components/price/withoutDiscount/priceWithoutDiscount.component';

@Directive({
    selector: '[louisPrice]'
})
class PriceDirective implements OnInit {

    @Input()
    price: string;

    @Input()
    discount: boolean;

    constructor(private containerRef: ViewContainerRef,
                private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        const componentToCreate = this.discount ? PriceWithDiscountComponent : PriceWithoutDiscountComponent;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

        const componentRef = this.containerRef.createComponent(componentFactory);

        return componentRef;
    }
}

export {PriceDirective};
