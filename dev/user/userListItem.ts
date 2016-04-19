export class UserListItem {
    name: string;
    age: number;
    admin: boolean;
    hover: boolean;

    constructor(public name: string, public age: number, public admin: boolean){
        this.hover = false;
    }
    constructor(public name: string, public age: number){
        this.admin = false;
        this.hover = false;
    }
}