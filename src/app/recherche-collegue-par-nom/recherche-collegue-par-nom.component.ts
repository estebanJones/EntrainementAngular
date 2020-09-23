import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  @Input()
  listeMatricule: string[];

  nomRechercher:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  rechercherByNom(value: string) : string {
    let resultat: string;
    this.listeMatricule.forEach(matricule => {
      if(matricule === value) {
       resultat = matricule;
      }
    });

    return resultat != undefined ? resultat : "Aucun resultat trouvé";
  }
}
