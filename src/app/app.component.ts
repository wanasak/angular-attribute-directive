import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1 [highlight]="color">Hello {{name}}</h1>`,
})
export class AppComponent {
  name: string = 'Angular';
  color: string = 'yellow';
}
