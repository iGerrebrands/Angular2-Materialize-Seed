import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation/navigation.component'
import {UserComponent} from './user/user.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.view.html',
    directives: [NavigationComponent, UserComponent]
})
export class AppComponent {


}