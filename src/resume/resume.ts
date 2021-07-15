import { Component , Input , OnInit} from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';


     
@Component({
    selector: 'resume-companent',
    templateUrl: './resume.html',
    styleUrls: ['./resume.css']
})

export class ResumeComponent implements OnInit{
    userName:string;
    userInfo:string;

    flVizion:boolean = false;
    

    constructor(
        private route: ActivatedRoute
    ){ }

    ngOnInit(){
        this.userName = sessionStorage.getItem('userName.com');
        this.userInfo = sessionStorage.getItem('userInfo.com');
    }
    
    pan(){
        this.flVizion = !this.flVizion;
    }
}