import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

type Car = {
  ID: number,
  name: string
}

const data: Array<Car> = [
  {ID: 1, name: 'car 1'},
  {ID: 2, name: 'car 2'},
  {ID: 3, name: 'car 3'},
  {ID: 4, name: 'car 4'},
  {ID: 5, name: 'car 5'},
  {ID: 6, name: 'car 6'},
  {ID: 7, name: 'car 7'},
  {ID: 8, name: 'car 8'},
  {ID: 9, name: 'car 9'},
  {ID: 10, name: 'car 10'},
  {ID: 11, name: 'car 11'},
  {ID: 12, name: 'car 12'},
  {ID: 13, name: 'car 13'},
  {ID: 14, name: 'car 14'},
  {ID: 15, name: 'car 15'},
  {ID: 16, name: 'car 16'},
  {ID: 17, name: 'car 17'},
  {ID: 18, name: 'car 18'},
  {ID: 19, name: 'car 19'},
  {ID: 20, name: 'car 20'}
];
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements AfterViewInit {

  search: string = '';
  cars: MatTableDataSource<Car> = new MatTableDataSource<Car>(data);
  displayedColumns: Array<string> = ['ID', 'name'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.cars.paginator = this.paginator;
  }

  applySearch() {
    this.cars.filter = this.search.trim().toLowerCase();
  }

  clearSearch() {
    this.search = '';
    this.applySearch();
  }

}
