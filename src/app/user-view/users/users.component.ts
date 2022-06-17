import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';

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

  constructor(private _userService : UserService) { }

  ngOnInit(): void {
    this.loadRecord();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadRecord() {
    this._userService.getUsers();
    //listener
    this._userService.getUserSubject().subscribe((data : User[]) =>{
      this.dataSource.data = data;
    })
  }

  onDelete(id : number){
   this._userService.removeUser(id);
  }

}
