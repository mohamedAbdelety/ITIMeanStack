import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { UsersComponent } from './user-view/users/users.component';
import { UserCreateComponent } from './user-view/user-create/user-create.component';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
