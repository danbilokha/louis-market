import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Order} from './order.dictionary';
import {Watch} from 'shared/dictionaries/watch.dictionary';

@Component({
    selector: 'louis-component-order',
    templateUrl: './order.template.html',
    styleUrls: ['./order.style.scss']
})
class WatchOrderComponent {

    @Input()
    watch: Watch;

    @Input()
    wantToBuy: boolean = false;

    @Output()
    orderWatch: EventEmitter<Order> = new EventEmitter<Order>();

    @Output()
    orderCancle: EventEmitter<void> = new EventEmitter<void>();

    public orderForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        phone: new FormControl()
    });

    public onClean(): void {
        this.orderForm.reset();
    }

    public onSubmit(): void {
        const orderForm = this.orderForm;
        this.orderWatch.emit(
            new Order(
                orderForm.get('name').value,
                orderForm.get('phone').value,
                orderForm.get('email').value,
                this.watch
            )
        );
        this.onClean();
        this.onCancle();
    }

    public onCancle(): void {
        this.orderCancle.emit();
    }
}

export {WatchOrderComponent};
