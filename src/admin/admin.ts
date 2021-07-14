import { Component, OnInit, Input} from '@angular/core';
import { HttpService} from '../services/http.service';
import { User } from '../datamodel/user';    

import { CardComponent } from "../card/card";

@Component({
    selector: 'admin-companent',
    templateUrl: './admin.html',
    styleUrls: ['./admin.css'],
    providers: [HttpService]
})

export class AdminComponent implements OnInit{ 
    //user: User = new User();
    users: User[]=[];
    tableMode: boolean = true;
    
    user : User | undefined;

    constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log(window.location.href);
        this.httpService.getData(this.httpService.urlUsers).subscribe((data:any) => this.users = data["userList"]);
        console.log(this.users);
    }
    


    // получаем данные через сервис
    loadProducts() {
        this.httpService.getData(this.httpService.urlUsers).subscribe((data:any) => this.users = data["userList"])
    }

    // сохранение данных
    save() {
        if (this.user.id = null) {
            this.httpService.postData(this.httpService.urlUsers, this.user).subscribe((data: User) => this.users.push(data))
        } else {
            this.httpService.updateData(this.httpService.urlUsers, this.user).subscribe((data: User) => this.users.push(data))
        }
    }

    editProduct() {

    }

    cancel() {
        this.user = new User();
        this.tableMode = true;
    }

    delete() {
    }

    add() {
        this.cancel();
        this.tableMode = false;
    }
}