import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  userList = signal<any[]>([])
  userObj = signal<any>({
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
})
  http = inject(HttpClient)

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.http.get('https://api.freeprojectapi.com/api/GoalTracker/getAllUsers')
      .subscribe((res:any) => {
        this.userList.set(res)
      })
  }

  resetForm() {
    this.userObj.set({
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    })
  }

  editUser(user: any) {
    this.userObj.set(user)
  }

  updateUser() {
    this.userObj().createdDate = new Date()
    this.userObj().extraId = 0
    this.userObj().projectName = "string"
    this.http.put('https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=' + this.userObj().userId, this.userObj())
      .subscribe({
        next: (res:any) => {
          alert('User updated successfully')
          this.getUser()
          this.resetForm()
        },
        error: (error:any) => {
          alert('Error updating user' + error.message)
        }
      })
  }

  deleteUser(userId: number) {
    const isDelete = confirm('Are you sure you want to delete this user?')
    if (isDelete) {
      this.http.delete('https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=' + userId)
        .subscribe({
          next: (res:any) => {
            alert('User deleted successfully')
            this.getUser()
          },
          error: (error:any) => {
            alert('Error deleting user' + error.message)
          }
        })
    }
  }

  saveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userObj())
      .subscribe({
        next: (res:any) => {
          alert('User saved successfully')
          this.getUser()
          this.resetForm()
        },
        error: (error:any) => {
          alert('Error saving user' + error.message)
        }
      })
  }
}
