import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'navigation',
    templateUrl: './app/navigation/navigation.view.html',
    styleUrls: ['./app/navigation/style.css']
})
export class NavigationComponent implements OnInit{

    ngOnInit():void {
        //noinspection TypeScriptUnresolvedFunction
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            hover: true,
            belowOrigin: true,
            alignment: 'right'
        });

        //noinspection TypeScriptUnresolvedFunction
        $(".button-collapse").sideNav();
    }

}