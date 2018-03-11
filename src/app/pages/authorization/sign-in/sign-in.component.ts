import {Component, OnDestroy, OnInit} from '@angular/core';

import {AuthorizationService} from '../authorization.service';
import {User} from '../authorization.dictionary';
import {Authorization} from '../Authorization';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'louis-p-sign-in',
    templateUrl: './sign-in.template.html',
    styleUrls: ['./sign-in.style.scss']
})
class SignInComponent extends Authorization implements OnInit {

    constructor(protected fb: FormBuilder,
                private authService: AuthorizationService) {
        super(fb);
    }

    ngOnInit() {
        super.initForm();
    }

    public onSubmit(): void {
        const form = this.form.getRawValue();

        const user: User = new User();
        user.login = form.login;
        user.password = form.password;

        this.authService.signIn(user);
    }

}

export {SignInComponent};
