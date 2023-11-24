import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgxHelloWorldComponent } from 'ngx-hello-world';

@Component({
  selector: 'demo-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxHelloWorldComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'demo_app';
}
