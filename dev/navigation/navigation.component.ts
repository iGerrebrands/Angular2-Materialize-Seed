import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.view.html',
    styleUrls: ['./app/navigation/style.css']
})
export class NavigationComponent implements OnInit{

    boxClass:string;

    ngOnInit():void {
        this.boxClass = 'mid-size';
    }

}