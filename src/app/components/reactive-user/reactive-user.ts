import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser implements OnInit{
  userList = signal<any[]>([])

  userForm: FormGroup = new FormGroup({
    userId: new FormControl (0),
    emailId: new FormControl ('',[Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
    fullName: new FormControl ('', [Validators.required]),
    mobileNo: new FormControl ('', [Validators.required, Validators.pattern('^[0-9]{10}$')])

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
    
  }

  saveUser() {
    this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', this.userForm.value)
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
