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
    public currency: string;
    public description: string;
    public type: string;
    public isAvailable: boolean;
    public discount?: number;

    public onReset(): void {

    }

    public onSubmit(): void {
        console.log(this.name, this.price, this.currency)
    }
}

export {FormBaseComponent}
