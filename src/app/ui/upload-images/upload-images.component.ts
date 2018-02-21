import {Component, Input} from '@angular/core';
import {LouisImage} from '@common/dictionaries/Image.dictionary';

@Component({
    selector: 'louis-upload-images',
    templateUrl: './upload-images.template.html',
    styleUrls: ['./upload-images.style.scss']
})
class UploadImagesComponent {

    @Input() public imageLoaFieldText: string = 'Кликните чтобы загрузить фотографии';
    @Input() public imageLoadBtnText: string = 'Загрузить фотографии';

    public images: Array<LouisImage> = [];

    public onClearImages(): void {
        this.images = [];
    }

    public onLoadImages($event: any): void {
        const target: HTMLInputElement = $event.target as HTMLInputElement;
        for (let i = 0, len = target.files.length; i < len; i++) {
            if (!this.isAlreadyUploaded(target.files[i].name)) {
                this.uploadingImage(target.files[i]);
            }
        }
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

export {UploadImagesComponent};
