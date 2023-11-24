# lit-elements-in-angular-lib
Demonstrates how lit-element based web components could (or not) be used in angular apps and libraries.

## Contents of this repo

### lit-elements library sample

The sample from <https://github.com/lit/lit-element-starter-ts/tree/lit-element-2.x#readme> was checked into the `lit-element-starter-ts-lit-element-2.x` folder.

It was built this way:

```bash
cd lit-element-starter-ts-lit-element-2.x
npm install
npm run build
```

Test that it serves the test page:

```bash
npm run serve
```

There is a development HTML file located at /dev/index.html that you can view at <http://localhost:8000/dev/index.html>.

It should show:

```txt
Hello, World!
Click Count: 0
This is child content
```

### Angular workspace

The angular workspace was created into the `angular` folder this way. 
Run this in the root of the repo:

```bash
npm install @angular/cli@16.0.0 -g
ng new angular_workspace --no-create-application
npm uninstall @angular/cli -g
```

#### Angular Library Project

The library project was created inside the `angular_workspace` folder using

```bash
cd angular_workspace
npx ng generate library ngx-hello-world --standalone --prefix hw
```

Add local dependency on the web components module.

```bash
cd projects\ngx-hello-world
:: npm install --save @webcomponents/webcomponentsjs
npm install ..\..\..\lit-element-starter-ts-lit-element-2.x --save-peer
```

Let's build the library. And see if we could package it as an npm package.

Run this in the `angular_workspace` directory:

```bash
npx ng build ngx-hello-world
cd dist\ngx-hello-world
npm pack
```

This should create a `ngx-hello-world-0.0.1.tgz` file, which is the angular library that could be used in Angular applications.

#### Angular demo application

To prove we can use the Angular library, let's create a demo application.

Run this in the `angular_workspace` directory:

```bash
npx ng generate application demo_app --standalone --prefix demo --routing --style css
npm install ..\lit-element-starter-ts-lit-element-2.x
```

Test that it runs (Run this in the `angular_workspace` directory):

```bash
npm run start
```

Loading <http://localhost:4200/> in your browser should show a "demo_app is running" message and plenty of boxes.

Let's replace the content of this component in `angular_workspace/projects/demo_app/src/app/app.component.html`.
And let's add the component from the library to it instead.

Leave the dev server running and replace the [app.component.html](angular_workspace/projects/demo_app/src/app/app.component.html) with:

```html
<p>demo_app page</p>

<hw-ngx-hello-world></hw-ngx-hello-world>

<p>end of demo_app page</p>
```

It should show an error, until you import the component [app.component.ts](angular_workspace/projects/demo_app/src/app/app.component.ts).

Add the `NgxHelloWorldComponent` into the iports array and add the corresponding import statement.

```javascript
import { NgxHelloWorldComponent } from 'ngx-hello-world';

...

@Component({
  ...
  imports: [CommonModule, RouterOutlet, NgxHelloWorldComponent]
...
```

The page should show:

```txt
demo_app page

ngx-hello-world works!

end of demo_app page
```

## Adding lit-element to the Angular components library

Now, let's add the lit-element to the library Hello World component.

Append this to the template in `ng-hello-world.component.ts`:

```html
    <my-element name="Angular">
      <p>This is child content</p>
    </my-element>
```

And the import statement, so the Angular component loads the lit-element:

```javascript
import "lit-element-starter-ts";
```

Import and add the `CUSTOM_ELEMENTS_SCHEMA` into the `schemas`:

```javascript
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import "lit-element-starter-ts";

@Component({
  ...
  imports: [CommonModule, RouterOutlet, NgxHelloWorldComponent],
  ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

You will need to re-build the library `npx ng build ngx-hello-world` and if you get the `...(not statically analyzable)...` error in the `app.component.html`, you will need to re-start the `npm run start`.

Test the app, you should see:

```txt
demo_app page

ngx-hello-world works!

Hello, Angular!
Click Count: 0
This is child content

end of demo_app page
```

As a last step, we can expose the lit-element's `name` attribute on the Angular `ngx-hello-world.component.ts`.

Modify the `NgxHelloWorldComponent` class in `ngx-hello-world.component.ts` by adding a field:

```javascript
export class NgxHelloWorldComponent {
  @Input() name!: string;
}
```

... and by refering to it by interpolation in the template:

```html
    <my-element name="{{ name }}">
      <p>This is child content</p>
    </my-element>
```

The `!` in the `name` field declaration makes this a required attribute, so we must provide it in the `app.component.html`:

```html
<hw-ngx-hello-world name="Angular Demo App"></hw-ngx-hello-world>
```

So what are we missing?

Testing this: https://www.thisdot.co/blog/how-to-integrate-web-components-using-lit-in-angular

In `angular_workspace` run

```bash
npm install --save @webcomponents/webcomponentsjs
```

Update the [angular.json](angular_workspace/angular.json) as described in the article.

As a result, the page now shows

```txt
demo_app page

ngx-hello-world works!

Hello, Angular Demo App!
Click Count: 2
This is child content

end of demo_app page
```