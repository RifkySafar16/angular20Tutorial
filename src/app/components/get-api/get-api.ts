import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  http = inject(HttpClient);
  userList = signal<any[]>([]);
  todoList = signal<any[]>([]);
  busUserList = signal<any[]>([]);

  ngOnInit() {
    this.getUsers();
    this.getTodoItems();
    this.getAllBusBookingUsers();
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList.set(res);
      console.log("User List: ", this.userList());
    });
  }
  getTodoItems() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((res: any) => {
      this.todoList.set(res);
      console.log("Todo List: ", this.todoList());
    });
  }
  getAllBusBookingUsers() {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe((res: any) => {
      this.busUserList.set(res.data);
      console.log("Bus Booking Users: ", this.busUserList());
    });
  }
}
