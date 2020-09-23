import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './bonjour-avec-prenom/bonjour-avec-prenom.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { AdministrationCollegueComponent } from './administration-collegue/administration-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    AdministrationCollegueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
