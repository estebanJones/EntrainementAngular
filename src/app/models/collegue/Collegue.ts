export class Collegue {
    matricule: string;
    nom: string;
    prenoms: string;
    email: string;
    dateDeNaissance: Date;
    photoUrl: string;
  
    constructor(matricule : string) {
      this.matricule = matricule
    }
}