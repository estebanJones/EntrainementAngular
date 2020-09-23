import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-collegue',
  templateUrl: './administration-collegue.component.html',
  styleUrls: ['./administration-collegue.component.css']
})
export class AdministrationCollegueComponent implements OnInit {

  @Input() matriculeListe: string[];

  constructor() {

   }

  ngOnInit(): void {
  }

}
