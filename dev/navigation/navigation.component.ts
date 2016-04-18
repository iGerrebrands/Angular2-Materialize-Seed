import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'navigation',
    templateUrl: './dev/navigation/navigation.view.html',
    styleUrls: ['./dev/navigation/style.css']
})
export class NavigationComponent implements OnInit{

    boxClass:string;

    ngOnInit():void {
        this.boxClass = 'mid-size';
    }

}