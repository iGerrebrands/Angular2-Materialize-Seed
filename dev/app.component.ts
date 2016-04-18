import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation/navigation.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.view.html',
    directives: [NavigationComponent]
})
export class AppComponent {


}