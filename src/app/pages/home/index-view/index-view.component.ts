import {Component} from '@angular/core';
import {LOGO_TEXT_LARGE_DARK} from '@settings/constants';

@Component({
    selector: 'louis-l-index-view',
    templateUrl: './index-view.template.html',
    styleUrls: ['./index-view.style.scss']
})
class IndexViewComponent {
    public LOGO: string = LOGO_TEXT_LARGE_DARK;
}

export {IndexViewComponent};
