import { Component, OnInit, ViewChild } from '@angular/core';

     
class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.companent.html',
    styleUrls: ['./app.companent.css'] 
})

export class AppComponent { 
    
}