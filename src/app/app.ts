import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';
import { ControlFlow } from './components/control-flow/control-flow';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ControlFlow, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
