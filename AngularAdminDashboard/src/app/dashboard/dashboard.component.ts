import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort, MatTableDataSource } from '@angular/material';
import { merge } from 'rxjs';
import{IApplications} from '../models/applications.models';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['employee_name', 'employee_salary', 'appstatus', 'comstatus', 'action'];
  errorMessage = '';

  dataSource;
  user;
  applicationLists: IApplications[];
  constructor(private appService:ApplicationService) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    console.log('=================');
    this.appService.getApplication1()
    .subscribe((users: IApplications[]) => {
      this.applicationLists = users;
      console.log(users);
      this.dataSource = new MatTableDataSource(users);
      //this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

}

// export interface Applications {
//   name: string;
//   appno: string;
//   appstatus: string;
//   comstatus: string;
// }
