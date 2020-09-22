import { Component, Input, OnInit } from '@angular/core';
import { CollegueMock } from '../mock/collegues.mock';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()
  col: any;
  constructor() { }

  ngOnInit(): void {
  }

  modifier() : void {
    console.log("Modification du collègue");
  }

  creer() : void {
    console.log("Création du collègue");
  }
}
