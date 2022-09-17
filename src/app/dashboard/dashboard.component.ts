import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(RegisterComponent) register : any;

  public usersData : any[] = [];
  constructor(private utilsService : UtilsService) 
  {}

  ngOnInit(): void {;
    this.utilsService.getUsers().subscribe(u => this.usersData = u)
  }

}
