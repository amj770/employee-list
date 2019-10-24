import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  employees = [
    {
      "cust_id":1,
      "cust_name": "John",
      "cust_email": "john@email.com",
      "cust_phn": 3123
    },{
      "cust_id":2,
      "cust_name": "Chris",
      "cust_email": "chris@email.com",
      "cust_phn": 1234
    },{
      "cust_id":3,
      "cust_name": "Bruce",
      "cust_email": "bruce@email.com",
      "cust_phn": 2345
    },{
      "cust_id":4,
      "cust_name": "Steve",
      "cust_email": "steve@email.com",
      "cust_phn": 3456
    },{
      "cust_id":5,
      "cust_name": "Scott",
      "cust_email": "scott@email.com",
      "cust_phn": 4567
    },{
      "cust_id":6,
      "cust_name": "Clint",
      "cust_email": "clint@email.com",
      "cust_phn": 5678
    },{
      "cust_id":7,
      "cust_name": "Stephen",
      "cust_email": "stephen@email.com",
      "cust_phn": 6789
    },{
      "cust_id":8,
      "cust_name": "Mike",
      "cust_email": "mike@email.com",
      "cust_phn": 7890
    },{
      "cust_id":9,
      "cust_name": "Emily",
      "cust_email": "emily@email.com",
      "cust_phn": 8901
    },{
      "cust_id":10,
      "cust_name": "Asmal",
      "cust_email": "asmal@email.com",
      "cust_phn": 9012
    },{
      "cust_id":11,
      "cust_name": "Mark",
      "cust_email": "mark@email.com",
      "cust_phn": 9876
    },{
      "cust_id":12,
      "cust_name": "Lucy",
      "cust_email": "lucy@email.com",
      "cust_phn": 8765
    },{
      "cust_id":13,
      "cust_name": "Dakota",
      "cust_email": "dakota@email.com",
      "cust_phn": 7654
    },{
      "cust_id":14,
      "cust_name": "Hilary",
      "cust_email": "hilary@email.com",
      "cust_phn": 6543
    },{
      "cust_id":15,
      "cust_name": "Harry",
      "cust_email": "harry@email.com",
      "cust_phn": 5432
    },{
      "cust_id":16,
      "cust_name": "Emma",
      "cust_email": "emma@email.com",
      "cust_phn": 4321
    },{
      "cust_id":17,
      "cust_name": "Tyron",
      "cust_email": "tyron@email.com",
      "cust_phn": 3210
    },{
      "cust_id":18,
      "cust_name": "Dianne",
      "cust_email": "dianne@email.com",
      "cust_phn": 2109
    }
  ];

  //sorting
  key: string = 'cust_id';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
}