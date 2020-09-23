import { Component, Input, OnInit } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  @Input()
  listeMatricule: string[];

  nomRechercher:string;

  constructor() { }

  ngOnInit(): void {
  }

  rechercherByNom() : void {
    this.listeMatricule.forEach(matricule => {
      console.log("matricule -> " + matricule + " nomRechercher -> " + this.nomRechercher);
      if(matricule === this.nomRechercher) {
        console.log("Ce matricule existe");
      } else {
        console.log("Ce matricule n'existe pas !")
      }
    });
  }
}
