import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule
  ]

})
export class MaterialModule { }
