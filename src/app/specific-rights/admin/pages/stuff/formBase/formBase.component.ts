import {Component} from '@angular/core';

@Component({
    selector: 'louis-form-base',
    templateUrl: './formBase.template.html',
    styleUrls: ['./formBase.style.scss']
})
class FormBaseComponent {

    public name: string;
    public image: string;
    public price: number;
    public currency: string = 'usd';
    public description: string;
    public type: string = 'automatic';
    public isAvailable: boolean = true;
    public discount?: number = 0;

    public currencies: Array<any> = [
        {
            value: 'usd', display: 'USD'
        },
        {
            value: 'eur', display: 'EUR'
        },
        {
            value: 'uah', display: 'UAH'
        }
    ];

    public types: Array<object> = [
        {
            value: 'automatic', display: 'automatic'
        },
        {
            value: 'quartz', display: 'quartz'
        }
    ];

    public onReset(): void {

    }

    public onSubmit(): void {
        console.log(this.name, this.price, this.currency)
    }
}

export {FormBaseComponent}
