import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Form} from '@interfaces/form';
import {AbstractControl} from '@angular/forms/src/model';
import {DbService} from '@db/dbService';

@Component({
    selector: 'louis-l-keep-in-touch',
    templateUrl: './keep-in-touch.template.html',
    styleUrls: ['./keep-in-touch.styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
class KeepInTouchComponent implements OnInit {

    public keepInTouchForm: FormGroup;

    constructor(protected fb: FormBuilder,
                private db: DbService) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.keepInTouchForm = this.fb.group({
            name: '',
            mail: ['', [EmailValidator, Validators.required]],
            phone: '',
            message: ['', Validators.required],
        });
    }

    public onClean() {
        this.keepInTouchForm.reset();
    }

    public onSubmit() {
        if(this.keepInTouchForm.valid) {
            this.db.setDbData('USER_MESSAGE_FORM', this.keepInTouchForm.value);
            this.onClean();
        }
    }

}

export {KeepInTouchComponent};
