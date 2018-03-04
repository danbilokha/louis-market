import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

abstract class Form {

    private form: FormGroup;

    constructor(protected fb: FormBuilder) {
    }

    protected createForm(): void {
        this.form = this.fb.group({});
    };

    protected addFormControl(key: string, value: AbstractControl): void {
        this.form.addControl(key, value);
    };
}

export {Form};
