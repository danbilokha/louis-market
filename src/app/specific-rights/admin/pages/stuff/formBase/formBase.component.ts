import {Component, EventEmitter} from '@angular/core';
import {UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions} from 'ngx-uploader';
import {read} from 'fs';

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

    public value: number = 1;

    public valueChanged = (newValue: number): void => {
        this.value = newValue;
        this.isAvailable = newValue === 1;
    };

    options: UploaderOptions;
    files: UploadFile[] = [];
    uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();
    humanizeBytes: Function = humanizeBytes;
    dragOver: boolean;

    onUploadOutput(output: UploadOutput): void {
        let reader = new FileReader();
        reader.onload = () => {
            let binaryFile = reader.result;
        }
        reader.onerror = () => {
        }
        reader.onloadend = () => {

        }
        reader.readAsDataURL(output.file);
        console.log(output);
        if (output.type === 'allAddedToQueue') { // when all files added in queue
            // uncomment this if you want to auto upload files when added
            // const event: UploadInput = {
            //   type: 'uploadAll',
            //   url: '/upload',
            //   method: 'POST',
            //   data: { foo: 'bar' }
            // };
            // this.uploadInput.emit(event);
        } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') { // add file to array when added
            this.files.push(output.file);
            console.log(this.files);
        } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
            // update current data in files array for uploading file
            const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
            this.files[index] = output.file;
        } else if (output.type === 'removed') {
            // remove file from array when removed
            this.files = this.files.filter((file: UploadFile) => file !== output.file);
        } else if (output.type === 'dragOver') {
            this.dragOver = true;
        } else if (output.type === 'dragOut') {
            this.dragOver = false;
        } else if (output.type === 'drop') {
            this.dragOver = false;
        }
    }

    removeFile(id: string): void {
        this.uploadInput.emit({type: 'remove', id: id});
    }

    removeAllFiles(): void {
        this.uploadInput.emit({type: 'removeAll'});
    }

    public onReset(): void {

    }

    public onSubmit(): void {
        console.log(this.name, this.price, this.currency)
    }
}

export {FormBaseComponent}
