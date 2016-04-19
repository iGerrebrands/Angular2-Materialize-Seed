import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation/navigation.component'
import {UserListComponent} from './user/list/userList.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.view.html',
    directives: [NavigationComponent, UserListComponent]
})
export class AppComponent {


}