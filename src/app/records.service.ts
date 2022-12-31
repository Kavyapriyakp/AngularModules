import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  emp1:string[]=["Kavya", "001", "kavya@gmail.com"];
  emp2:string[]=["Priya", "002", "priya@gmail.com"];
  emp3:string[]=["KP", "003", "kp@gmail.com"];

  getInfo1(){
    return this.emp1;
  }

  getInfo2(){
    return this.emp2;
  }

  getInfo3(){
    return this.emp3;
  }

  constructor() { }
}
