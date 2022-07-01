import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/component/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

//


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  displayedColumns: string[] = ['name', 'email', 'phone', 'website','action'];
  dataSource : MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(private _title : Title,private _userService : UserService, private dialog : MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._title.setTitle("MeanStack | Users")
    this.loadRecord();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadRecord() {

    this._userService.getUserSubject().subscribe((data : User[]) =>{
      this.dataSource.data = data;
    })
    this._userService.getUsers();
  }

  onDelete(id : number){
    let name = this._userService.getUserById(id);
    const dialog = this.dialog.open(ConfirmDialogComponent,{
      width:'300px',
      disableClose:true,
      data:{
        name
      }
    })

    dialog.afterClosed().subscribe((result : boolean)=>{
      if(result){
        this._userService.removeUser(id);
        this._snackBar.open(name+" deleted Succefully", "X",{
          duration:3000
        });
      }
    })
  }

}
