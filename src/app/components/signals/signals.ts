import { Component, computed, inject, signal } from '@angular/core';
import { Master } from '../../services/master';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  firstName: string = "Chetan";
  productName = "Moto"
  master = inject(Master)
  cityList = this.master.getItems()
  courseName = signal<string>("Angular");
  courseDuration = signal("15 Videos");

  courseDetail = computed (() => this.courseName() + " - " + this.courseDuration())

  constructor() {
    this.firstName = "Rahul";
    setTimeout(() => {
      this.courseName.set("React")
    }, 5000)
  }
}
