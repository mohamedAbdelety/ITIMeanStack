import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user-view/users/users.component';
import { UserCreateComponent } from './user-view/user-create/user-create.component';


const routes : Routes = [
  {path:'users',component:UsersComponent},
  {path:'users/create',component:UserCreateComponent},
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'**',redirectTo:'users',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
