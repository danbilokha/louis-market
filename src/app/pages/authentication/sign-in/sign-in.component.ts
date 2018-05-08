import {Component, OnInit} from '@angular/core';

import {AuthorizationService} from '../authentication.service';
import {User} from '../authentication.dictionary';
import {Authentication} from '../Authentication';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'louis-p-sign-in',
    templateUrl: './sign-in.template.html',
    styleUrls: ['./sign-in.style.scss']
})
class SignInComponent extends Authentication implements OnInit {

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
