import { Component, OnInit } from '@angular/core';

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
export class DataComponent implements OnInit {

  search: string = '';
  cars: Array<Car> = data;
  constructor() {}

  ngOnInit(): void {
  }

  applySearch() {
    this.cars = data.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  clearSearch() {
    this.search = '';
    this.applySearch();
  }

}
