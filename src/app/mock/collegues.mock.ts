import { Component } from '@angular/core';

@Component({
    template: '<h1> Matricule: {{ colleguesMock.matricule }}</h1>',
    selector: 'collegue-mock'
})
export class CollegueMock {
    colleguesMock = {
        matricule: "Jones57678Esteban",
        nom: "Jones",
        prenoms: "Esteban",
        email: "maow@gmail.com",
        dateDeNaissance: new Date(),
        photoUrl: "img/lol.jpeg"
    }
}