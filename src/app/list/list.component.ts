import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ApiService } from '../Services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  banner: any = [];

  displayedColumns: string[] = ['Coin', 'Price', '24H Change', 'Market Cap', 'Circulating'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getbannerdata()
    this.getalldata()
  }

  getbannerdata() {
    this.api.GetTrending("USD").subscribe(res => {
      //console.log(res);
      this.banner = res;
    })
  }

  getalldata() {
    this.api.GetCurrency("USD").subscribe(res => {
      // console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  details(row: any) {
    this.router.navigate(['detail', row.id])
  }

  //search filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
