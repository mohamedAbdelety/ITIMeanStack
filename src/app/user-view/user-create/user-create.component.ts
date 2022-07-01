import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../Model/User';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {



  constructor(private _title : Title,private _userService : UserService,private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    this._title.setTitle("MeanStack | Add User");
  }

  addUser(addingForm : NgForm){
    if(addingForm.valid){
      let user : User = {
        name : addingForm.controls.name.value,
        email : addingForm.controls.email.value,
        phone : addingForm.controls.phone.value,
        website : addingForm.controls.website.value,
        id : 0
      }
      this._userService.addUser(user);
      this._snackBar.open("Added Succefully", "X",{
        duration:3000
      });
      this.router.navigate(['/users'])
    }
  }


}
