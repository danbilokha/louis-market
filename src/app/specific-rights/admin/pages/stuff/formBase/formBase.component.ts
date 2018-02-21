import {Component} from '@angular/core';
import {LouisImage} from './Image.dictionary';

@Component({
    selector: 'louis-form-base',
    templateUrl: './formBase.template.html',
    styleUrls: ['./formBase.style.scss', './image.style.scss']
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

    // isAvailabe
    public value: number = 1;

    // Image
    public imageLoadBtnText: string = "Загрузить фотографии";
    public images: Array<LouisImage> = [];

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


    public valueChanged = (newValue: number): void => {
        this.value = newValue;
        this.isAvailable = newValue === 1;
    };

    public onClearImages(): void {
        this.images = [];
    }

    public onLoadImages($event: any): void {
        const target: HTMLInputElement = $event.target as HTMLInputElement;
        for(let i = 0, len = target.files.length; i < len; i++) {
            if(!this.isAlreadyUploaded(target.files[i].name)) {
                this.uploadingImage(target.files[i]);
            }
        }
    }

    public onReset(): void {

    }

    public onSubmit(): void {
        console.log(this.name, this.price, this.currency)
    }

    private isAlreadyUploaded(name: string): boolean { /* tslint:disable:member-ordering */
        let isAlreadyUploaded = false;

        name = this.getImageName(name);
        this.images.map(image => {
            if (image.name === name) {
                isAlreadyUploaded = true;

            }
        });

        return isAlreadyUploaded;
    }

    private uploadingImage(image: File): void { /* tslint:disable:member-ordering */
        const reader = new FileReader();

        reader.onload = () => {
            const binary = reader.result;
            const louisImage = new LouisImage(
                this.getImageName(image.name),
                image.size,
                image.type,
                binary,
                !!this.images.length);

            this.images.push(louisImage);
            console.log(this.images);
        };
        reader.onerror = () => {
        };
        reader.onloadend = () => {
        };

        reader.readAsDataURL(image);
    }

    private getImageName(name: string): string {
        return name.slice(0, name.indexOf('.'));
    }
}

export {FormBaseComponent}
