import { Component } from '@angular/core';
import { CollegueMock } from './mock/collegues.mock';
import { mock } from './mock/matricule.mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  col = new CollegueMock().colleguesMock;
  listMatricule: string[] = mock;
  test: any;
  constructor() {
  }

}
