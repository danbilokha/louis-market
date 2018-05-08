import {Component, Input} from '@angular/core';

@Component({
    selector: 'louis-c-header',
    templateUrl: './header.template.html',
    styleUrls: ['./header.style.scss']
})
class HeaderComponent {

    @Input()
    public backgroundImage: string = '../assets/img/fabio-mangione.jpg';

}

export {HeaderComponent};
