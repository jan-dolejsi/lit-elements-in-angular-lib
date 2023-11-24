import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
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

    <my-element name="Angular">
      <p>This is child content</p>
    </my-element>
  `,
  styles: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
})
export class NgxHelloWorldComponent {

}
