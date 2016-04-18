import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'container',
    templateUrl: './dev/container/container.view.html',
    styleUrls: ['./dev/container/style.css']
})
export class ContainerComponent implements OnInit{

    boxClass:string;

    ngOnInit():void {
        this.boxClass = 'mid-size';
    }

}