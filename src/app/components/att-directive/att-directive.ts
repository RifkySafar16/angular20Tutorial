import { Component, OnInit, signal, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe} from '@angular/common';
@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  div1ClassName = signal<string>('')
  isDiv2Green = signal<boolean>(false)
  firstName = signal<string>('Rifky')
  courseName = signal<string>('Angular 20 Tutorial')
  rollNoList = signal<number[]>([11, 12, 13, 14, 15, 16, 17])
  studentObject = signal<{name: string, rollNo: number, course: string}>(
    {name: 'Rifky', rollNo: 11, course: 'Angular 20 Tutorial'})
  currentDate = signal<Date>(new Date())

  constructor() { 
    console.log("constructor() called");
  }

  ngOnInit(): void {
    console.log("ngOnInit() called");
    // to trigger api calls
    // to subscribe
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() called");
    //to deal with viewChild
    //to subscribe
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy() called");
    // to unsubscribe
    // to restrict user from navigating
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green.set(!this.isDiv2Green());
  }

}
