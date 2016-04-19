import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {UserListItem} from '../userListItem';

@Component({
    selector: 'user-list',
    templateUrl: './app/user/list/userList.view.html',
    styleUrls: ['./app/user/list/style.css'],
    directives: [NgClass]
})
export class UserListComponent {

    users: UserListItem[] = [
        new UserListItem('Ian', 23, true),
        new UserListItem('Jeff', 19),
        new UserListItem('Teng', 23)
    ];


    toggleHover(user): void {
        user.hover = !user.hover;
    }
}