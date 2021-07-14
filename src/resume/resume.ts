import { Component , Input } from '@angular/core';
import { HttpService} from '../services/http.service';
import { AdminComponent } from '../admin/admin';
import { User } from '../datamodel/user';
     
@Component({
    selector: 'card-companent',
    templateUrl: './resume.html',
    styleUrls: ['./resume.css']
})

export class ResumeComponent { 
    @Input() name: string;
}