import {ComponentFactoryResolver, ComponentRef, Pipe, PipeTransform, Renderer2} from '@angular/core';
import {CalculatePricePipe} from '../calculatePrice/calculatePrice';
import {DiscountPipe} from '../discount/discount';
import {ToFixedPipe} from '../toFixed/toFixed';
import {CurrencySignPipe} from '../currencySign/currencySign';
import {AddSpacePipe} from '../addSpace/addSpace';
import {PriceWithDiscountComponent} from '@components/price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from '@components/price/withoutDiscount/priceWithoutDiscount.component';
import {PriceBase} from '@components/price/priceBase';

@Pipe({
    name: 'transformPrice'
})
class PriceShowPipe implements PipeTransform {

    constructor(private render: Renderer2,
                private componentFactoryResolver: ComponentFactoryResolver,
                private currencySignPipe: CurrencySignPipe,
                private addSpacePipe: AddSpacePipe,
                private toFixedPipe: ToFixedPipe,
                private discountPipe: DiscountPipe,
                private calculatePricePipe: CalculatePricePipe) {
    }

    transform(value: number, {currencyTo, discount = 0, toFixed = 2}): ComponentRef<PriceBase> {

        debugger;

        const componentToCreate = !!discount ? PriceWithDiscountComponent : PriceWithoutDiscountComponent;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

        const componentRef = this.containerRef.createComponent(componentFactory);

        componentRef.instance.shownPrice = this.currencySignPipe.transform(
            this.addSpacePipe.transform(
                this.toFixedPipe.transform(
                    this.discountPipe.transform(
                        this.calculatePricePipe.transform(value, currencyTo)
                        , discount)
                    , toFixed),
            ), currencyTo);

        return componentRef;
    }
}

export {PriceShowPipe};
