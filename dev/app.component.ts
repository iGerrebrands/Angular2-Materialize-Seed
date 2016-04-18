import {Component} from 'angular2/core';
import {ContainerComponent} from './container/container.component'

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.view.html',
    directives: [ContainerComponent]
})
export class AppComponent {


}