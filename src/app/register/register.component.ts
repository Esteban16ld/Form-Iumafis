import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public users : any[] = [];

  public userForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required]
})

  constructor(
    private formBuilder : FormBuilder,
    private utilsService : UtilsService
  ) {
    this.users = [];
   }

  ngOnInit(): void {
    console.log(this.users);
  }


  public registerUser(){
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }

  public generateData(){
    this.utilsService.setUsers(this.users);
  }
}
