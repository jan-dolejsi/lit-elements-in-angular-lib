import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import "lit-element-starter-ts";

@Component({
  selector: 'hw-ngx-hello-world',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ngx-hello-world works!
    </p>

    <my-element name="{{ name }}">
      <p>This is child content</p>
    </my-element>
  `,
  styles: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
})
export class NgxHelloWorldComponent {
  @Input() name!: string;
}
